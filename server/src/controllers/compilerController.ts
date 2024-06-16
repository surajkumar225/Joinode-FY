// import { Request, Response } from "express";
// import { Code } from "../models/code";

// export const saveCode = async(req:Request, res:Response) => {
//     const {fullCode} = req.body;
//     try{
//         const newCode = await Code.create({
//             fullCode: fullCode,
//         });
//         return res.status(201).send(newCode);
//     }catch(error){
//         return res.status(500).send({messgae:"Error while saving code", error});
//     }
// };

// import { Request, Response } from "express";
import { Request, Response } from "express";
import { Code } from "../models/Code";
// import { Code } from "../models/Code";

export const saveCode = async (req: Request, res: Response) => {
  const {fullCode} = req.body;
  try {
    const newCode = await Code.create({
      fullCode: fullCode
    });
    return res.status(201).send({ url: newCode._id, status: "saved!"});
  } catch (error) {
    return res.status(500).send({ message: "Error saving code", error });
  }
};