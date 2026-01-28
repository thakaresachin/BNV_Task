import User from "../models/User.js";
import fs from "fs";

// CREATE USER
export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// GET USERS (Search + Pagination)
export const getUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 5, search = "" } = req.query;

    const query = {
      $or: [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    };

    const users = await User.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await User.countDocuments(query);

    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    next(error);
  }
};

// GET USER BY ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// UPDATE USER
export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// DELETE USER
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// EXPORT CSV
export const exportUsersCSV = async (req, res, next) => {
  try {
    const users = await User.find();

    let csv = "FirstName,LastName,Email,Mobile,Gender,Status,Location\n";

    users.forEach((u) => {
      csv += `${u.firstName},${u.lastName},${u.email},${u.mobile},${u.gender},${u.status},${u.location}\n`;
    });

    res.header("Content-Type", "text/csv");
    res.attachment("users.csv");
    res.send(csv);
  } catch (error) {
    next(error);
  }
};
