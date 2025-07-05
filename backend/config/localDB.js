const fs = require('fs').promises;
const path = require('path');

class LocalDB {
  constructor() {
    this.dbPath = path.join(__dirname, '../data');
    this.usersFile = path.join(this.dbPath, 'users.json');
    this.sessionsFile = path.join(this.dbPath, 'sessions.json');
    this.questionsFile = path.join(this.dbPath, 'questions.json');
    this.init();
  }

  async init() {
    try {
      await fs.mkdir(this.dbPath, { recursive: true });
      
      // Initialize files if they don't exist
      await this.initFile(this.usersFile, []);
      await this.initFile(this.sessionsFile, []);
      await this.initFile(this.questionsFile, []);
    } catch (error) {
      console.error('Error initializing local database:', error);
    }
  }

  async initFile(filePath, defaultData) {
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2));
    }
  }

  async readData(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading ${filePath}:`, error);
      return [];
    }
  }

  async writeData(filePath, data) {
    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(`Error writing ${filePath}:`, error);
    }
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // User operations
  async findUser(query) {
    const users = await this.readData(this.usersFile);
    return users.find(user => {
      if (query._id) return user._id === query._id;
      if (query.email) return user.email === query.email;
      return false;
    });
  }

  async createUser(userData) {
    const users = await this.readData(this.usersFile);
    const newUser = {
      _id: this.generateId(),
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    users.push(newUser);
    await this.writeData(this.usersFile, users);
    return newUser;
  }

  async updateUser(id, updateData) {
    const users = await this.readData(this.usersFile);
    const userIndex = users.findIndex(user => user._id === id);
    if (userIndex === -1) return null;

    users[userIndex] = {
      ...users[userIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    await this.writeData(this.usersFile, users);
    return users[userIndex];
  }

  // Session operations
  async findSessions(query) {
    const sessions = await this.readData(this.sessionsFile);
    if (query.userId) {
      return sessions.filter(session => session.userId === query.userId);
    }
    return sessions.find(session => session._id === query._id);
  }

  async createSession(sessionData) {
    const sessions = await this.readData(this.sessionsFile);
    const newSession = {
      _id: this.generateId(),
      ...sessionData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    sessions.push(newSession);
    await this.writeData(this.sessionsFile, sessions);
    return newSession;
  }

  async updateSession(id, updateData) {
    const sessions = await this.readData(this.sessionsFile);
    const sessionIndex = sessions.findIndex(session => session._id === id);
    if (sessionIndex === -1) return null;

    sessions[sessionIndex] = {
      ...sessions[sessionIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    await this.writeData(this.sessionsFile, sessions);
    return sessions[sessionIndex];
  }

  async deleteSession(id) {
    const sessions = await this.readData(this.sessionsFile);
    const filteredSessions = sessions.filter(session => session._id !== id);
    await this.writeData(this.sessionsFile, filteredSessions);
    return true;
  }
}

module.exports = new LocalDB();
