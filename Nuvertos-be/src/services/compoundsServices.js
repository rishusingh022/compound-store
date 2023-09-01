const db = require('../../db/models');

const getAllCompounds = async (offset, limit) => {
  try{
    // eslint-disable-next-line no-undef
    return await db.nuvertosCompounds.findAndCountAll({
      offset,
      limit,
      order: [['id', 'ASC']],
    });
  }
  catch (err) {
    throw new Error(err);
  }
};

const getCompoundById = async (id) => {
  try {
    return await db.nuvertosCompounds.findByPk(id);
  }
  catch (err) {
    throw new Error(err);
  }

};

const createCompound = async (compound) => {
  try{
    return await db.nuvertosCompounds.create(compound);
  }
  catch (err) {
    throw new Error(err);
  }
};

const updateCompound = async (id, compound) => {
  try{
    return await db.nuvertosCompounds.update(compound, { where: { id }, returning: true, plain: true});
  }
  catch (err) {
    throw new Error(err);
  }
};

const deleteCompound = async (id) => {
  try{
    return await db.nuvertosCompounds.destroy({ where: { id } });
  }
  catch (err) {
    throw new Error(err);
  }
};


module.exports = {
  getAllCompounds,
  getCompoundById,
  createCompound,
  updateCompound,
  deleteCompound,
};