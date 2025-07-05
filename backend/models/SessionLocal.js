const mongoose = require("mongoose");
const localDB = require("../config/localDB");

// Regular Mongoose schema (for production)
const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  topicsToFocus: { type: String, required: true },
  description: { type: String, default: "" },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
}, { timestamps: true });

const MongoSession = mongoose.model("Session", sessionSchema);

// Local database adapter
class LocalSession {
  static async find(query = {}) {
    if (query.userId) {
      return await localDB.findSessions({ userId: query.userId });
    }
    return await localDB.findSessions({});
  }

  static async findById(id) {
    return await localDB.findSessions({ _id: id });
  }

  static async create(sessionData) {
    return await localDB.createSession(sessionData);
  }

  static async findByIdAndDelete(id) {
    return await localDB.deleteSession(id);
  }

  async save() {
    if (this._id) {
      return await localDB.updateSession(this._id, this);
    } else {
      const newSession = await localDB.createSession(this);
      Object.assign(this, newSession);
      return this;
    }
  }

  async populate(field) {
    // Simple populate simulation for local DB
    return this;
  }

  constructor(data) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

// Export the appropriate model based on environment
const Session = process.env.NODE_ENV === 'development' || !process.env.MONGO_URI || process.env.MONGO_URI.includes('<db_password>') 
  ? LocalSession 
  : MongoSession;

module.exports = Session;
