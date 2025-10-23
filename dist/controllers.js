import db from "./database.js";
export async function getAllCardsController(_, res) {
    try {
        const [data] = await db.query('SELECT * FROM cards');
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
}
export async function getCardByIdController(req, res) {
    try {
        const [data] = await db.query('SELECT * FROM cards WHERE id = ?', [req.params.id]);
        if (data.length === 0) {
            return res.status(404).json({ message: 'Card not found' });
        }
        res.status(200).json(data[0]);
    }
    catch (error) {
        res.status(500).json(error);
    }
}
export async function createCardController(req, res) {
    try {
        const [{ insertId: id }] = await db.query('INSERT INTO cards SET ?', [req.body]);
        res.status(201).json({ message: 'Card created successfully', id });
    }
    catch (error) {
        res.status(500).json(error);
    }
}
export async function updateCardController(req, res) {
    try {
        await db.query('UPDATE cards SET ? WHERE id = ?', [req.body, req.params.id]);
        res.status(200).json({ message: 'Card updated successfully' });
    }
    catch (error) {
        res.status(500).json(error);
    }
}
export async function deleteCardController(req, res) {
    try {
        await db.query('DELETE FROM cards WHERE id = ?', [req.params.id]);
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json(error);
    }
}
