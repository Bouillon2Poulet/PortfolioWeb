import { query } from '../backend/db'; // Import de db.js

export async function getAllProjects() {
  const [rows] = await query('SELECT * FROM projects');
  return rows;
}
export async function getProjectById(id) {
  const [rows] = await query('SELECT * FROM projects WHERE id = ?', [id]);
  return rows[0];
}
