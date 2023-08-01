import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    wallet: {type: String, require: true}
});


export const UserModel = mongoose.model('User', UserSchema);

export const getUserByWallet = (wallet: string) => UserModel.findOne({ wallet: wallet });

export const createUser = (values: Record<string, any>) => new UserModel(values)
.save().then((user) => user.toObject());