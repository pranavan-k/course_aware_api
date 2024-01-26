import mongoose from "mongoose";
import { ObjectId } from "mongoose";

interface IProblem {
    _id: ObjectId,
    name: string,
    description: string,
    difficulity: string,
    image: string,
    solution: Object,
}

const problemSchema = new mongoose.Schema<IProblem>({
    name: String,
    description: String,
    difficulity: String,
    image: String,
    solution: Object,
});

module.exports = mongoose.model<IProblem>("functions", problemSchema)