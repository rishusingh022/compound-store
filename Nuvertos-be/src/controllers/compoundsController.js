const compoundsServices = require('../services/compoundsServices');

const getAllCompounds = async (req, res) => {
  try {
    const page = req.query.pg ? parseInt(req.query.pg) : 1;
    const limit = 3;
    const offset = (page - 1) * limit;
    const compounds = await compoundsServices.getAllCompounds(offset, limit);
    if (compounds.rows.length === 0) {
      return res.status(404).json({ message: 'No compounds found' });
    }
    res.status(200).json(compounds);
  }
  catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const getCompoundById = async (req, res) => {
  try {
    const compound = await compoundsServices.getCompoundById(req.params.id);
    if (!compound) {
      return res.status(404).json({ message: 'Compound not found' });
    }
    res.status(200).json(compound);
  }
  catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

const addCompound = async (req, res) => {
  try {
    const newCompound = await compoundsServices.createCompound(req.body);
    res.status(201).json(newCompound);
  }
  catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const updateCompoundById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCompound = await compoundsServices.updateCompound(id, req.body);
    
    if(updatedCompound[1] === 0) {
      return res.status(404).json({ message: 'Compound not found' });
    }
    res.status(200).json(await compoundsServices.getCompoundById(id));
  }
  catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const deleteCompoundById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCompound = await compoundsServices.deleteCompound(id);
    if (deletedCompound) {
      return res.status(204).json({ message: 'Compound deleted'});
    } 
    res.status(404).json({ message: 'Compound not found' });
  }
  catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  getAllCompounds,
  getCompoundById,
  addCompound,
  updateCompoundById,
  deleteCompoundById,
};