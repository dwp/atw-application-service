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


     router.route('/alpha-eligibility-control/do-you-live-in-gb')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['do-you-live-in-gb']) {
           case 'yes':
             redirectUrl = '/alpha-eligibility-control/right-to-work-in-uk'
             break
           case 'no':
             redirectUrl = '/alpha-eligibility-control/posted-worker'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })


     router.route('/alpha-eligibility-control/posted-worker')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['posted-worker']) {
           case 'yes':
             redirectUrl = '/alpha-eligibility-control/employment-status'
             break
           case 'no':
             redirectUrl = '/alpha-eligibility-control/ineligible-not-posted-worker'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })

     router.route('/alpha-eligibility-control/right-to-work-in-uk')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['right-to-work-in-uk']) {
           case 'yes':
             redirectUrl = '/alpha-eligibility-control/employment-status'
             break
           case 'no':
             redirectUrl = '/alpha-eligibility-control/#'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })


    router.route('/alpha-eligibility-control/employment-status')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['employment-status']) {
          case 'im-employed':
            redirectUrl = '/alpha-eligibility-control/are-you-16-or-over'
            break
          case 'im-self-employed':
            redirectUrl = '/alpha-eligibility-control/are-you-16-or-over'
            break
          case 'job-offer':
             redirectUrl = '/alpha-eligibility-control/are-you-16-or-over'
             break
           case 'work-experience':
              redirectUrl = '/alpha-eligibility-control/paid-work'
              break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })


     router.route('/alpha-eligibility-control/paid-work')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['paid-work']) {
           case 'yes':
             redirectUrl = '/alpha-eligibility-control/are-you-16-or-over'
             break
           case 'no':
             redirectUrl = '/alpha-eligibility-control/#'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })

      router.route('/alpha-eligibility-control/mainly-based-in-gb')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['mainly-gb']) {
            case 'yes':
              redirectUrl = '/alpha-eligibility-control/do-you-need-support'
              break
            case 'no':
              redirectUrl = '/alpha-eligibility-control/#'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })


       router.route('/alpha-eligibility-control/do-you-need-support')
         .post((req, res, next) => {
           let redirectUrl
           switch (req.body['do-you-need-support']) {
             case 'yes':
               redirectUrl = '/alpha-eligibility-control/what-is-your-date-of-birth'
               break
             case 'no':
               redirectUrl = '/alpha-eligibility-control/#'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })

       router.route('/alpha-eligibility-control/are-you-16-or-over')
         .post((req, res, next) => {
           let redirectUrl
           switch (req.body['are-you-16-or-over']) {
             case 'yes':
               redirectUrl = '/alpha-eligibility-control/current-benefits'
               break
             case 'no':
               redirectUrl = '/alpha-eligibility-control/#'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })