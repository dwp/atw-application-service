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
             redirectUrl = '/alpha-eligibility-control/right-to-work-in-gb'
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


         router.route('/alpha-eligibility-control/right-to-work-in-gb')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['right-to-work-in-gb']) {
               case 'yes':
                 redirectUrl = '/alpha-eligibility-control/employment-status'
                 break
               case 'no':
                 redirectUrl = '/alpha-eligibility-control/ineligible-not-resident'
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


    router.route('/alpha-eligibility-control/employment-status')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['employment-status']) {
          case 'im-employed':
            redirectUrl = '/alpha-eligibility-control/mainly-based-in-gb'
            break
          case 'im-self-employed':
            redirectUrl = '/alpha-eligibility-control/mainly-based-in-gb'
            break
          case 'job-offer':
             redirectUrl = '/alpha-eligibility-control/mainly-based-in-gb'
             break
           case 'work-experience':
              redirectUrl = '/alpha-eligibility-control/paid-work'
              break
           case 'unemployed':
              redirectUrl = '/alpha-eligibility-control/ineligible-employment-status'
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
             redirectUrl = '/alpha-eligibility-control/mainly-based-in-gb'
             break
           case 'no':
             redirectUrl = '/alpha-eligibility-control/ineligible-non-paid-work'
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
              redirectUrl = '/alpha-eligibility-control/ineligible-employment-outside-gb'
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
               redirectUrl = '/alpha-eligibility-control/are-you-16-or-over'
               break
             case 'no':
               redirectUrl = '/alpha-eligibility-control/ineligible-no-support-needed'
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
               redirectUrl = '/alpha-eligibility-control/ineligible-under-16'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })

router.route('/alpha-eligibility-control/current-benefits')
  .post((req, res, next) => {
    switch (req.body['current-benefits'][0]) {
      case 'none':
        redirectUrl = '/alpha-eligibility-control/you-may-be-eligible'
        break

      default:
        redirectUrl = '/alpha-eligibility-control/ineligible-benefit-status'
        break
    }
    res.redirect(redirectUrl)
  })


  router.route('/alpha-eligibility-2/2a-current-benefits')
    .post((req, res, next) => {
      switch (req.body['2a-current-benefits'][0]) {
        case 'none':
          redirectUrl = '/alpha-eligibility-2/2a-you-may-be-eligible'
          break

        default:
          redirectUrl = '/alpha-eligibility-2/2a-ineligible-benefit-status'
          break
      }
      res.redirect(redirectUrl)
    })


       router.route('/alpha-eligibility-2/2a-right-to-work-in-gb')
         .post((req, res, next) => {
           let redirectUrl
           switch (req.body['2a-right-to-work-in-gb']) {
             case 'yes':
               redirectUrl = '/alpha-eligibility-2/2a-employment-status'
               break
             case 'no':
               redirectUrl = '/alpha-eligibility-2/2a-ineligible-not-resident'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })

      router.route('/alpha-eligibility-2/2a-employment-status')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['2a-employment-status']) {
            case 'im-employed':
              redirectUrl = '/alpha-eligibility-2/2a-mainly-based-in-gb'
              break
            case 'im-self-employed':
              redirectUrl = '/alpha-eligibility-2/2a-mainly-based-in-gb'
              break
            case 'job-offer':
               redirectUrl = '/alpha-eligibility-2/2a-mainly-based-in-gb'
               break
             case 'work-experience':
                redirectUrl = '/alpha-eligibility-2/2a-paid-work'
                break
             case 'unemployed':
                redirectUrl = '/alpha-eligibility-2/2a-ineligible-employment-status'
                break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })


     router.route('/alpha-eligibility-2/2a-paid-work')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['2a-paid-work']) {
           case 'yes':
             redirectUrl = '/alpha-eligibility-2/2a-mainly-based-in-gb'
             break
           case 'no':
             redirectUrl = '/alpha-eligibility-2/2a-ineligible-non-paid-work'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })

      router.route('/alpha-eligibility-2/2a-mainly-based-in-gb')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['mainly-gb']) {
            case 'yes':
              redirectUrl = '/alpha-eligibility-2/2a-do-you-need-support'
              break
            case 'no':
              redirectUrl = '/alpha-eligibility-2/2a-ineligible-employment-outside-gb'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

       router.route('/alpha-eligibility-2/2a-do-you-need-support')
         .post((req, res, next) => {
           let redirectUrl
           switch (req.body['2a-do-you-need-support']) {
             case 'yes':
               redirectUrl = '/alpha-eligibility-2/2a-current-benefits'
               break
             case 'no':
               redirectUrl = '/alpha-eligibility-2/2a-ineligible-no-support-needed'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })


         router.route('/alpha-eligibility-2/2b-do-you-need-support')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['2b-do-you-need-support']) {
               case 'yes':
                 redirectUrl = '/alpha-eligibility-2/2b-national-insurance-number'
                 break
               case 'no':
                 redirectUrl = '/alpha-eligibility-2/2b-ineligible-no-support-needed'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })

           router.route('/alpha-eligibility-2/2c-do-you-need-support')
             .post((req, res, next) => {
               let redirectUrl
               switch (req.body['2c-do-you-need-support']) {
                 case 'yes':
                   redirectUrl = '/alpha-eligibility-2/2c-national-insurance-number'
                   break
                 case 'no':
                   redirectUrl = '/alpha-eligibility-2/2c-ineligible-no-support-needed'
                   break

                 default:
                   redirectUrl = req.path
                   break
               }
               res.redirect(redirectUrl)
             })

  router.route('/alpha-eligibility-3/3a-current-benefits')
    .post((req, res, next) => {
      switch (req.body['current-benefits'][0]) {
        case 'none':
          redirectUrl = '/alpha-eligibility-3/3a-you-may-be-eligible'
          break

        default:
          redirectUrl = '/alpha-eligibility-3/3a-ineligible-benefit-status'
          break
      }
      res.redirect(redirectUrl)
    })


   router.route('/alpha-eligibility-3/3a-current-benefits-blue')
     .post((req, res, next) => {
       switch (req.body['current-benefits'][0]) {
         case 'none':
           redirectUrl = '/alpha-eligibility-3/3a-you-may-be-eligible-blue'
           break

         default:
           redirectUrl = '/alpha-eligibility-3/3a-ineligible-benefit-status-blue'
           break
       }
       res.redirect(redirectUrl)
     })


    router.route('/alpha-eligibility-3/3b-current-benefits')
      .post((req, res, next) => {
        switch (req.body['current-benefits'][0]) {
          case 'none':
            redirectUrl = '/alpha-eligibility-3/3b-do-you-know-what-support-you-need'
            break

          default:
            redirectUrl = '/alpha-eligibility-3/3b-ineligible-benefit-status'
            break
        }
        res.redirect(redirectUrl)
      })
