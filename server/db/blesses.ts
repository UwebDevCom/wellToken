import mongoose from "mongoose";

const BlessSchema = new mongoose.Schema({
    wallet: {type: String, require: true},
    bless: {
        createdAt: {type: Number},
        content:  {type: String}
    }
});


export const BlessModel = mongoose.model('Bless', BlessSchema);

export const getBlessesByWallet = (wallet: string) => BlessModel.find({ wallet });

export const createBless = (values: Record<string, any>) => new BlessModel(values)
.save().then((bless) => bless.toObject());