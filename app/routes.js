const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.route('/2-alpha-accessibility/2a-support-options')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['support-type']) {
      case 'online':
        redirectUrl = '/2-alpha-accessibility/2a-support-options'
        break
      case 'telephone':
        redirectUrl = '/2-alpha-accessibility/2a-telephone'
        break
      case 'textphone':
        redirectUrl = '/2-alpha-accessibility/2a-textphone'
        break
      case 'relay-uk':
        redirectUrl = '/2-alpha-accessibility/2a-relay-uk'
        break
      case 'video-relay':
      redirectUrl = '/2-alpha-accessibility/2a-video-relay'
      break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })


router.route('/2-alpha-accessibility/2b-do-you-need-support')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['do-you-need-support']) {
      case 'no':
        redirectUrl = '/2-alpha-accessibility/#'
        break
      case 'yes':
        redirectUrl = '/2-alpha-accessibility/2b-accessibility-information'
        break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })


router.route('/2-alpha-accessibility/2c-bsl-support')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['do-you-need-support']) {
      case 'no':
        redirectUrl = '/2-alpha-accessibility/#'
        break
      case 'yes':
        redirectUrl = '/2-alpha-accessibility/2c-bsl-guidance-options'
        break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })


router.route('/2-alpha-accessibility/2c-bsl-guidance-options')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['guidance-options']) {
      case 'online-bsl':
        redirectUrl = '/2-alpha-accessibility/2c-bsl-online-video'
        break
      case 'video-relay':
        redirectUrl = '/2-alpha-accessibility/2c-video-relay'
        break
      case 'interpreter':
        redirectUrl = '/2-alpha-accessibility/2c-interpreter'
        break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })


  router.route('/3-alpha-accessibility/support-column-1')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['additional-support']) {
        case 'yes':
          redirectUrl = '/3-alpha-accessibility/#'
          break
        case 'no':
          redirectUrl = '/3-alpha-accessibility/support-column-1-no'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })


    router.route('/3-alpha-accessibility/support-column-2')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['additional-support']) {
          case 'yes':
            redirectUrl = '/3-alpha-accessibility/#'
            break
          case 'no':
            redirectUrl = '/3-alpha-accessibility/support-column-2-no'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })


      router.route('/3-alpha-accessibility/support-column-3')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['additional-support']) {
            case 'yes':
              redirectUrl = '/3-alpha-accessibility/#'
              break
            case 'no':
              redirectUrl = '/3-alpha-accessibility/support-column-3-no'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })


    router.route('/3-alpha-accessibility/support-column-4')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['additional-support']) {
          case 'yes':
            redirectUrl = '/3-alpha-accessibility/#'
            break
          case 'no':
            redirectUrl = '/3-alpha-accessibility/support-column-4-no'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })



      router.route('/3-alpha-accessibility/support-column-5')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['additional-support']) {
            case 'yes':
              redirectUrl = '/3-alpha-accessibility/#'
              break
            case 'no':
              redirectUrl = '/3-alpha-accessibility/support-column-5-no'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })


    router.route('/3-alpha-accessibility/support-column-6')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['additional-support']) {
          case 'yes':
            redirectUrl = '/3-alpha-accessibility/#'
            break
          case 'no':
            redirectUrl = '/3-alpha-accessibility/support-column-6-no'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })
