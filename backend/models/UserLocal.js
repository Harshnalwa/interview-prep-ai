const mongoose = require("mongoose");
const localDB = require("../config/localDB");

// Regular Mongoose schema (for production)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImageUrl: { type: String, default: "" },
}, { timestamps: true });

const MongoUser = mongoose.model("User", userSchema);

// Local database adapter
class LocalUser {
  static async findOne(query) {
    return await localDB.findUser(query);
  }

  static async findById(id) {
    return await localDB.findUser({ _id: id });
  }

  static async create(userData) {
    return await localDB.createUser(userData);
  }

  async save() {
    if (this._id) {
      return await localDB.updateUser(this._id, this);
    } else {
      const newUser = await localDB.createUser(this);
      Object.assign(this, newUser);
      return this;
    }
  }

  constructor(data) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

// Export the appropriate model based on environment
const User = process.env.NODE_ENV === 'development' || !process.env.MONGO_URI || process.env.MONGO_URI.includes('<db_password>') 
  ? LocalUser 
  : MongoUser;

module.exports = User;
