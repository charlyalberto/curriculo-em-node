//Curriculo.js
const db = require('../config/db.config');

const createCurriculoTable = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS curriculos (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        training_level VARCHAR NOT NULL,
        age INTEGER,
        current_company VARCHAR,
        portfolio_web VARCHAR
      )
    `;
    await db.query(createTableQuery);
    console.log('Tabela de currículos criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a tabela de currículos:', error);
  }
};

const insertCurriculo = async (curriculoData) => {
  try {
    const insertQuery = `
      INSERT INTO curriculos (name, training_level, age, current_company, portfolio_web)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const { name, training_level, age, current_company, portfolio_web } = curriculoData;
    await db.query(insertQuery, [name, training_level, age, current_company, portfolio_web]);
    console.log('Currículo inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir currículo:', error);
  }
};

const getAllCurriculos = async () => {
  try {
    const selectAllQuery = 'SELECT * FROM curriculos';
    const result = await db.query(selectAllQuery);
    return result.rows;
  } catch (error) {
    console.error('Erro ao obter currículos:', error);
    return [];
  }
};

const updateCurriculo = async (id, newData) => {
    try {
      const updateQuery = `
        UPDATE curriculos
        SET name = $1, training_level = $2, age = $3, current_company = $4, portfolio_web = $5
        WHERE id = $6
      `;
      const { name, training_level, age, current_company, portfolio_web } = newData;
      await db.query(updateQuery, [name, training_level, age, current_company, portfolio_web, id]);
      console.log('Currículo atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar currículo:', error);
    }
  };
  
  const deleteCurriculo = async (id) => {
    try {
      const deleteQuery = 'DELETE FROM curriculos WHERE id = $1';
      await db.query(deleteQuery, [id]);
      console.log('Currículo excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir currículo:', error);
    }
  };

module.exports = {
  createCurriculoTable,
  insertCurriculo,
  getAllCurriculos,
  updateCurriculo,
  deleteCurriculo,
};
