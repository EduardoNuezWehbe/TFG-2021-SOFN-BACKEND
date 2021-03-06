const { AsyncWrapper } = require('../utils/async-wrapper')

const Enterprise = require('../models/Enterprise')
const ErrorRequest = require('../errorHandling/requestError')

const createEnterprise = AsyncWrapper(async (req, res) => {
  const newEnterprise = new Enterprise(req.body)
  try {
    await newEnterprise.save()
    res.status(201).send({
      success: true,
      msg: '[SUCCESS] Enterprise created!...'
    })
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: `${error}`
    })
  }
})

const updateEnterpriseDetails = AsyncWrapper(async (req, res) => {
  try {
    const enterprise = await Enterprise.findOneAndUpdate({ name: req.body.name, owner: req.body.owner }, req.body)
    if (!enterprise) throw new ErrorRequest('[ERROR] Enterprise not found...', 404)
    return res.status(200).send({
      success: true,
      user: enterprise,
      msg: '[SUCCESS] Enterprise details updated successfully!...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

const updateLogo = AsyncWrapper(async (req, res) => {
  try {
    const enterprise = await Enterprise.findOneAndUpdate({ name: req.body.name, owner: req.body.owner }, req.body)
    if (!enterprise) throw new ErrorRequest('[ERROR] Enterprise not found...', 404)
    return res.status(200).send({
      success: true,
      user: enterprise,
      msg: '[SUCCESS] Logo updated successfully!...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

const updateBanner = AsyncWrapper(async (req, res) => {
  try {
    const enterprise = await Enterprise.findOneAndUpdate({ name: req.body.name, owner: req.body.owner }, req.body)
    if (!enterprise) throw new ErrorRequest('[ERROR] Enterprise not found...', 404)
    return res.status(200).send({
      success: true,
      user: enterprise,
      msg: '[SUCCESS] Banner updated successfully!...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

const updateSocialMedia = AsyncWrapper(async (req, res) => {
  try {
    const enterprise = await Enterprise.findOneAndUpdate({ name: req.body.name, owner: req.body.owner }, req.body)
    if (!enterprise) throw new ErrorRequest('[ERROR] Enterprise not found...', 404)
    return res.status(200).send({
      success: true,
      user: enterprise,
      msg: '[SUCCESS] Updated socialmedia successfully!...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

const updateEnterprise = AsyncWrapper(async (req, res) => {
  try {
    const enterprise = await Enterprise.findOneAndUpdate({ _id: req.body._id }, req.body, { $set: { address: req.body.address } })
    if (!enterprise) throw new ErrorRequest('[ERROR] Enterprise not found...', 404)
    return res.status(200).send({
      success: true,
      enterprise: enterprise,
      msg: '[SUCCESS] Update enterprise data successfully!...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

const getEnterpriseProfile = AsyncWrapper(async (req, res) => {
  try {
    const enterprise = await Enterprise.find({ user_id: req.params.id })
    if (!enterprise) throw new ErrorRequest('[ERROR] Enterprise not found...', 404)
    return res.status(200).send({
      success: true,
      enterprise: enterprise,
      msg: '[SUCCESS] Users enterprises retrieved successfully!...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

const getEnterpriseById = AsyncWrapper(async (req, res) => {
  try {
    const enterprise = await Enterprise.findOne({ _id: req.body.enterprise_id })
    if (!enterprise) throw new ErrorRequest('[ERROR] Enterprise not found...', 404)
    return res.status(200).send({
      success: true,
      enterprise: enterprise,
      msg: '[SUCCESS] Enterprise retrieved successfully!!...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

const updateProduct = AsyncWrapper(async (req, res) => {
  try {
    const enterprise = await Enterprise.updateOne({ _id: req.body.enterprise_id }, { $push: { product: req.body.product } })
    if (!enterprise) throw new ErrorRequest('[ERROR] Enterprise not found...', 404)
    return res.status(200).send({
      success: true,
      enterprise: enterprise,
      msg: '[SUCCESS] Product updated successfully!...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

const getAllEnterprise = AsyncWrapper(async (req, res) => {
  try {
    const enterprises = await Enterprise.find()
    if (!enterprises) throw new ErrorRequest('[ERROR] Enterprises not found...', 404)
    return res.status(200).send({
      success: true,
      enterprises: enterprises,
      msg: '[SUCCESS] All enterprises retrieved...'
    })
  } catch (error) {
    if (error.status !== undefined) {
      return res.status(error.status).send({
        success: false,
        error: `${error.message}`
      })
    } else {
      return res.status(400).json({
        success: false,
        error: `${error}`
      })
    }
  }
})

module.exports = {
  createEnterprise,
  updateEnterpriseDetails,
  updateLogo,
  updateBanner,
  updateSocialMedia,
  getEnterpriseProfile,
  updateEnterprise,
  getEnterpriseById,
  getAllEnterprise,
  updateProduct
}
