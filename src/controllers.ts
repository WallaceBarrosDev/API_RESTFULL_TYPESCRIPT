import { Request, Response } from "express";
import db from "./database.js";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export async function getAllCardsController(_: Request, res: Response) {
  try {
    const [data] = await db.query('SELECT * FROM cards');
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getCardByIdController(req: Request, res: Response) {
  try {
    const [data] = await db.query<RowDataPacket[]>('SELECT * FROM cards WHERE id = ?', [req.params.id]);
    if (data.length === 0) {
      return res.status(404).json({message: 'Card not found'});
    }
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function createCardController(req: Request, res: Response) {
  try {
    const [{ insertId: id }] = await db.query<ResultSetHeader>('INSERT INTO cards SET ?', [req.body]);
    res.status(201).json({message: 'Card created successfully', id});
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateCardController(req: Request, res: Response) {
  try {
    await db.query('UPDATE cards SET ? WHERE id = ?', [req.body, req.params.id]);
    res.status(200).json({message: 'Card updated successfully'});
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deleteCardController(req: Request, res: Response) {
  try {
    await db.query('DELETE FROM cards WHERE id = ?', [req.params.id]);
    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
}
