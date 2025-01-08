const Bar = require("../models/bar.model");

const getBars = async (req, res) => {
  try {
    const bars = await Bar.find();

    res.status(201).json({
      message: "Bars Fetched !",
      success: true,
      bars: bars,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des bars." });
  }
};

const createBar = async (req, res) => {
  const { name, tel, adresse, email, description } = req.body;

  try {
    const newBar = new Bar({
      name,
      tel,
      adresse,
      email,
      description,
    });

    await newBar.save();

    res.status(201).json({
      message: "Bars created !",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la creation du bar." });
  }
};

const deleteBar = async (req, res) => {
  const { barId } = req.params;

  try {
    await Bar.findOneAndDelete({ _id: barId });

    res.status(201).json({
      message: "Bar Deleted successfully !",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la suppression du bar." });
  }
};

const updateBar = async (req, res) => {
  const { barId } = req.params;
  const { name, tel, adresse, email, description } = req.body;

  try {
    const barFound = await Bar.findByIdAndUpdate(
      barId,
      { name: name },
      { name: tel },
      { name: adresse },
      { name: email },
      { name: description },
      { new: true }
    );

    if (!barFound) {
      return res.status(404).json({ message: "Bar not found" });
    }

    res.status(201).json({
      message: "Bar Updated successfully !",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la modification du bar." });
  }
};

module.exports = {
  getBars,
  createBar,
  deleteBar,
  updateBar,
};
