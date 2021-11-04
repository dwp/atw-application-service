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


        router.route('/alpha-eligibility-1/1-employment-status')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['1-employment-status']) {
              case 'yes':
                redirectUrl = '/alpha-eligibility-1/1-employment-type'
                break
              case 'no':
                redirectUrl = '/alpha-eligibility-1/1-ineligible-employment-status'
                break
                case 'job-offer':
                  redirectUrl = '/alpha-eligibility-1/1-employment-type-you-are-starting'
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
                        case 'apprenticeship':
                           redirectUrl = '/alpha-eligibility-control/mainly-based-in-gb'
                           break
                        case 'dfe':
                           redirectUrl = '/alpha-eligibility-control/mainly-based-in-gb'
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
                   redirectUrl = '/alpha-eligibility-2/2b-current-benefits'
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

           router.route('/alpha-eligibility-2/2d-do-you-need-support')
             .post((req, res, next) => {
               let redirectUrl
               switch (req.body['2d-do-you-need-support']) {
                 case 'yes':
                   redirectUrl = '/alpha-eligibility-2/2d-national-insurance-number'
                   break
                 case 'no':
                   redirectUrl = '/alpha-eligibility-2/2d-ineligible-no-support-needed'
                   break

                 default:
                   redirectUrl = req.path
                   break
               }
               res.redirect(redirectUrl)
             })

             router.route('/alpha-eligibility-2/2c-who-are-you-applying-for')
               .post((req, res, next) => {
                 let redirectUrl
                 switch (req.body['who-are-you-applying-for']) {
                   case 'myself':
                     redirectUrl = '/alpha-eligibility-2/2c-do-you-need-support'
                     break
                   case 'someone else':
                     redirectUrl = '/alpha-eligibility-2/#'
                     break

                   default:
                     redirectUrl = req.path
                     break
                 }
                 res.redirect(redirectUrl)
               })

               router.route('/alpha-eligibility-2/2d-who-are-you-applying-for')
                 .post((req, res, next) => {
                   let redirectUrl
                   switch (req.body['who-are-you-applying-for']) {
                     case 'myself':
                       redirectUrl = '/alpha-eligibility-2/2d-do-you-need-support'
                       break
                     case 'someone else':
                       redirectUrl = '/alpha-eligibility-2/#'
                       break

                     default:
                       redirectUrl = req.path
                       break
                   }
                   res.redirect(redirectUrl)
                 })

    router.route('/alpha-eligibility-2/2b-current-benefits')
      .post((req, res, next) => {
        switch (req.body['2b-current-benefits'][0]) {
          case 'none':
            redirectUrl = '/alpha-eligibility-2/2b-you-may-be-eligible'
            break

          default:
            redirectUrl = '/alpha-eligibility-2/2b-ineligible-benefit-status'
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


    router.route('/alpha-eligibility-3/3c-current-benefits')
      .post((req, res, next) => {
        switch (req.body['current-benefits'][0]) {
          case 'none':
            redirectUrl = '/alpha-eligibility-3/3c-do-you-know-what-support-you-need'
            break

          default:
            redirectUrl = '/alpha-eligibility-3/3c-ineligible-benefit-status'
            break
        }
        res.redirect(redirectUrl)
      })

          router.route('/alpha-eligibility-3/3b-current-benefits')
            .post((req, res, next) => {
              switch (req.body['current-benefits'][0]) {
                case 'none':
                  redirectUrl = '/alpha-eligibility-3/3b-you-may-be-eligible'
                  break

                default:
                  redirectUrl = '/alpha-eligibility-3/3b-ineligible-benefit-status'
                  break
              }
              res.redirect(redirectUrl)
            })

      router.route('/alpha-eligibility-3/3b-current-benefits-blue')
        .post((req, res, next) => {
          switch (req.body['current-benefits'][0]) {
            case 'none':
              redirectUrl = '/alpha-eligibility-3/3b-you-may-be-eligible-blue'
              break

            default:
              redirectUrl = '/alpha-eligibility-3/3b-ineligible-benefit-status-blue'
              break
          }
          res.redirect(redirectUrl)
        })

    router.route('/alpha-eligibility-1/1-employment-type')
      .post((req, res, next) => {
        switch (req.body['1-employment-type'][0]) {
          case 'none':
            redirectUrl = '/alpha-eligibility-1/1-ineligible-employment-type'
            break

          default:
            redirectUrl = '/alpha-eligibility-1/1-do-you-need-support'
            break
        }
        res.redirect(redirectUrl)
      })

     router.route('/alpha-eligibility-1/1-employment-type-you-are-starting')
       .post((req, res, next) => {
         switch (req.body['1-employment-type-you-are-starting'][0]) {
           case 'none':
             redirectUrl = '/alpha-eligibility-1/1-ineligible-employment-type-you-are-starting'
             break

           default:
             redirectUrl = '/alpha-eligibility-1/1-do-you-need-support-with-the-job-you-are-starting'
             break
         }
         res.redirect(redirectUrl)
       })


       router.route('/5-alpha-accessibility/5-do-you-need-support')
         .post((req, res, next) => {
           let redirectUrl
           switch (req.body['do-you-need-support']) {
             case 'yes':
               redirectUrl = '/5-alpha-accessibility/5-bsl-support'
               break
             case 'no':
               redirectUrl = '/5-alpha-accessibility/5-your-support-situation'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })

       router.route('/5-alpha-accessibility/5-bsl-support')
         .post((req, res, next) => {
           let redirectUrl
           switch (req.body['5-bsl-support']) {
             case 'yes':
               redirectUrl = '/5-alpha-accessibility/5-bsl-video-support'
               break
             case 'no':
               redirectUrl = '/5-alpha-accessibility/5-accessibility-information'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })

        router.route('/5-alpha-accessibility/5-your-support-situation')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['5-your-support-situation']) {
              case 'yes':
                redirectUrl = '/5-alpha-accessibility/#'
                break
              case 'no':
                redirectUrl = '/5-alpha-accessibility/#'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

        router.route('/5-alpha-accessibility/5-bsl-video-support')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['5-bsl-video-support']) {
              case 'yes':
                redirectUrl = '/5-alpha-accessibility/5-you-may-be-eligible-bsl-blue'
                break
              case 'no':
                redirectUrl = '/5-alpha-accessibility/5-ineligible-no-support-needed-bsl'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

         router.route('/5-alpha-accessibility/5-your-support-situation')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['5-your-support-situation']) {
               case 'yes':
                 redirectUrl = '/5-alpha-accessibility/5-you-may-be-eligible'
                 break
               case 'no':
                 redirectUrl = '/5-alpha-accessibility/5-ineligible-no-support-needed'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })


        router.route('/alpha-apply-1b/1b-bsl-support')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['1b-bsl-support']) {
              case 'yes':
                redirectUrl = '/alpha-apply-1b/1b-bsl-eligibility-statement'
                break
              case 'no':
                redirectUrl = '/alpha-apply-1b/1b-accessibility-information'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

 router.route('/alpha-apply-1b/1b-do-you-need-support')
   .post((req, res, next) => {
     let redirectUrl
     switch (req.body['do-you-need-support']) {
       case 'yes':
         redirectUrl = '/alpha-apply-1b/1b-bsl-support'
         break
       case 'no':
         redirectUrl = '/alpha-apply-1b/1b-eligibility-statement'
         break

       default:
         redirectUrl = req.path
         break
     }
     res.redirect(redirectUrl)
   })

router.route('/alpha-apply-1b/1b-bsl-support')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['1b-bsl-support']) {
      case 'yes':
        redirectUrl = '/alpha-apply-1b/#'
        break
      case 'no':
        redirectUrl = '/alpha-apply-1b/1b-accessibility-information'
        break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })


  router.route('/alpha-apply-1b/1b-who-are-you-applying-for')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['1b-who-are-you-applying-for']) {
        case 'myself':
          redirectUrl = '/alpha-apply-1b/1b-eligibility-statement'
          break
        case 'someone else':
          redirectUrl = '/alpha-apply-1b/1b-#'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })

   router.route('/alpha-apply-1b/1b-esa')
     .post((req, res, next) => {
       let redirectUrl
       switch (req.body['1b-esa']) {
         case 'yes':
           redirectUrl = '/alpha-apply-1b/1b-less-than-16-hours'
           break
         case 'yes-but':
           redirectUrl = '/alpha-apply-1b/1b-you-may-be-eligible-blue'
           break
            case 'no':
              redirectUrl = '/alpha-apply-1b/1b-you-may-be-eligible-blue'
              break

         default:
           redirectUrl = req.path
           break
       }
       res.redirect(redirectUrl)
     })

    router.route('/alpha-apply-1b/1b-less-than-16-hours')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['1b-less-than-16-hours']) {
          case 'yes':
            redirectUrl = '/alpha-apply-1b/1b-you-may-be-eligible-blue'
            break
          case 'no':
            redirectUrl = '/alpha-apply-1b/1b-paid-supported-permitted-work'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

    router.route('/alpha-apply-1b/1b-paid-supported-permitted-work')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['1b-paid-supported-permitted-work']) {
          case 'yes':
            redirectUrl = '/alpha-apply-1b/1b-you-may-be-eligible-blue'
            break
          case 'no':
            redirectUrl = '/alpha-apply-1b/1b-ineligible'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

          router.route('/alpha-apply-1b/1b-nominated-representative')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['1b-nominated-representative']) {
                case 'yes':
                  redirectUrl = '/alpha-apply-1b/1b-nominated-representative-details'
                  break
                case 'no':
                  redirectUrl = '/alpha-apply-1b/1b-contact-preferences'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

            router.route('/alpha-apply-1b/1b-appointee')
              .post((req, res, next) => {
                let redirectUrl
                switch (req.body['1b-appointee']) {
                  case 'yes':
                    redirectUrl = '/alpha-apply-1b/1b-appointee-details'
                    break
                  case 'no':
                    redirectUrl = '/alpha-apply-1b/1b-nominated-representative'
                    break

                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })

              router.route('/alpha-apply-1b/1b-bsl-who-are-you-applying-for')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['1b-bsl-who-are-you-applying-for']) {
                    case 'myself':
                      redirectUrl = '/alpha-apply-1b/1b-bsl-eligibility-statement'
                      break
                    case 'I am an appointee':
                      redirectUrl = '/alpha-apply-1b/#'
                      break
                      case 'I am a representative':
                        redirectUrl = '/alpha-apply-1b/#'
                        break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

                router.route('/alpha-apply-1b/1b-do-you-know-what-support-you-need')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['1b-do-you-know-what-support-you-need']) {
                      case 'yes':
                        redirectUrl = '/alpha-apply-1b/1b-task-list'
                        break
                      case 'no':
                        redirectUrl = '/alpha-apply-1b/#'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })

                  router.route('/alpha-apply-1b/1b-appointee-or-representative')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['appointee-or-representative']) {
                        case 'I have an appointee':
                          redirectUrl = '/alpha-apply-1b/1b-appointee-details'
                          break
                        case 'I want to nominate a representative':
                          redirectUrl = '/alpha-apply-1b/1b-nominated-representative-details'
                          break
                          case 'I do not have an appointee or nominated representative':
                            redirectUrl = '/alpha-apply-1b/1b-contact-preferences'
                            break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })


                   router.route('/alpha-apply-1d/1d-do-you-need-support-at-work')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['do-you-need-support-at-work']) {
                         case 'yes':
                           redirectUrl = '/alpha-apply-1d/1d-what-support-you-need'
                           break
                         case 'no':
                           redirectUrl = '/alpha-apply-1d/1d-type-of-travel-support'
                           break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })

  router.route('/alpha-apply-1b/1b-another-health-condition-or-disability-2')
  .post((req, res, next) => {
  let redirectUrl
  switch (req.body['1b-another-health-condition-or-disability-2']) {
  case 'Yes':
  redirectUrl = '/alpha-apply-1b/1b-about-health-condition-or-disability-2'
  break
  case 'No':
  redirectUrl = '/alpha-apply-1b/1b-about-your-health-condition-or-disability-check-your-answers-2'
  break

  default:
  redirectUrl = req.path
  break
  }
  res.redirect(redirectUrl)
  })


    router.route('/alpha-apply-1b/1b-another-health-condition-or-disability-3')
    .post((req, res, next) => {
    let redirectUrl
    switch (req.body['1b-another-health-condition-or-disability-3']) {
    case 'Yes':
    redirectUrl = '/alpha-apply-1b/#'
    break
    case 'No':
    redirectUrl = '/alpha-apply-1b/1b-about-your-health-condition-or-disability-check-your-answers-3'
    break

    default:
    redirectUrl = req.path
    break
    }
    res.redirect(redirectUrl)
    })


                   router.route('/alpha-apply-1b/1b-employment-status')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['1b-employment-status']) {
                         case 'Employed':
                           redirectUrl = '/alpha-apply-1b/1b-employment-job-title'
                           break
                         case 'Self-employed':
                           redirectUrl = '/alpha-apply-1b/1b-self-employment-job-title'
                           break
                             case 'About to start employment':
                               redirectUrl = '/alpha-apply-1b/1b-about-to-start-employment-job-title'
                               break
                             case 'About to start self-employment':
                               redirectUrl = '/alpha-apply-1b/1b-about-to-start-self-employment-job-title'
                               break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })


                   router.route('/alpha-apply-1b/1b-employment-full-time')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['employment-full-time']) {
                         case 'Yes':
                           redirectUrl = '/alpha-apply-1b/1b-employment-employer-name'
                           break
                         case 'No':
                           redirectUrl = '/alpha-apply-1b/1b-employment-hours-per-week'
                           break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })

                    router.route('/alpha-apply-1b/1b-self-employment-full-time')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['self-employment-full-time']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1b/1b-self-employment-workplace-address'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1b/1b-self-employment-hours-per-week'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


                    router.route('/alpha-apply-1b/1b-about-to-start-employment-full-time')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['employment-full-time']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1b/1b-about-to-start-employment-employer-name'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1b/1b-about-to-start-employment-hours-per-week'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                     router.route('/alpha-apply-1b/1b-about-to-start-self-employment-full-time')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['self-employment-full-time']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1b/1b-about-to-start-self-employment-workplace-address'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1b/1b-about-to-start-self-employment-hours-per-week'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })


                  router.route('/alpha-apply-1b/1b-contact-someone-else')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['1b-contact-someone-else']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1b/1b-someone-else-details'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1b/1b-your-details-check-your-answers'
                          break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

  router.route('/alpha-apply-1b/1b-who-are-you-applying-for')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['1b-who-are-you-applying-for']) {
        case 'myself':
          redirectUrl = '/alpha-apply-1b/1b-eligibility-statement'
          break
        case 'I am an appointee':
          redirectUrl = '/alpha-apply-1b/1b-#'
          break
          case 'I am an appointee':
            redirectUrl = '/alpha-apply-1b/1b-#'
            break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })


          router.route('/alpha-apply-1c/1c-bsl-support')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['1c-bsl-support']) {
                case 'yes':
                  redirectUrl = '/alpha-apply-1c/1c-bsl-eligibility-statement'
                  break
                case 'no':
                  redirectUrl = '/alpha-apply-1c/1c-accessibility-information'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

   router.route('/alpha-apply-1c/1c-do-you-need-support')
     .post((req, res, next) => {
       let redirectUrl
       switch (req.body['do-you-need-support']) {
         case 'yes':
           redirectUrl = '/alpha-apply-1c/1c-bsl-support'
           break
         case 'no':
           redirectUrl = '/alpha-apply-1c/1c-eligibility-statement'
           break

         default:
           redirectUrl = req.path
           break
       }
       res.redirect(redirectUrl)
     })

  router.route('/alpha-apply-1c/1c-bsl-support')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['1c-bsl-support']) {
        case 'yes':
          redirectUrl = '/alpha-apply-1c/#'
          break
        case 'no':
          redirectUrl = '/alpha-apply-1c/1c-accessibility-information'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })


    router.route('/alpha-apply-1c/1c-who-are-you-applying-for')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['1c-who-are-you-applying-for']) {
          case 'myself':
            redirectUrl = '/alpha-apply-1c/1c-eligibility-statement'
            break
          case 'someone else':
            redirectUrl = '/alpha-apply-1c/1c-#'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

     router.route('/alpha-apply-1c/1c-esa')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['1c-esa']) {
           case 'yes':
             redirectUrl = '/alpha-apply-1c/1c-less-than-16-hours'
             break
           case 'yes-but':
             redirectUrl = '/alpha-apply-1c/1c-you-may-be-eligible-blue'
             break
              case 'no':
                redirectUrl = '/alpha-apply-1c/1c-you-may-be-eligible-blue'
                break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })

      router.route('/alpha-apply-1c/1c-less-than-16-hours')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['1c-less-than-16-hours']) {
            case 'yes':
              redirectUrl = '/alpha-apply-1c/1c-you-may-be-eligible-blue'
              break
            case 'no':
              redirectUrl = '/alpha-apply-1c/1c-paid-supported-permitted-work'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

      router.route('/alpha-apply-1c/1c-paid-supported-permitted-work')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['1c-paid-supported-permitted-work']) {
            case 'yes':
              redirectUrl = '/alpha-apply-1c/1c-you-may-be-eligible-blue'
              break
            case 'no':
              redirectUrl = '/alpha-apply-1c/1c-ineligible'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

            router.route('/alpha-apply-1c/1c-nominated-representative')
              .post((req, res, next) => {
                let redirectUrl
                switch (req.body['1c-nominated-representative']) {
                  case 'yes':
                    redirectUrl = '/alpha-apply-1c/1c-nominated-representative-details'
                    break
                  case 'no':
                    redirectUrl = '/alpha-apply-1c/1c-contact-preferences'
                    break

                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })

              router.route('/alpha-apply-1c/1c-appointee')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['1c-appointee']) {
                    case 'yes':
                      redirectUrl = '/alpha-apply-1c/1c-appointee-details'
                      break
                    case 'no':
                      redirectUrl = '/alpha-apply-1c/1c-nominated-representative'
                      break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

                router.route('/alpha-apply-1c/1c-bsl-who-are-you-applying-for')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['1c-bsl-who-are-you-applying-for']) {
                      case 'myself':
                        redirectUrl = '/alpha-apply-1c/1c-bsl-eligibility-statement'
                        break
                      case 'I am an appointee':
                        redirectUrl = '/alpha-apply-1c/#'
                        break
                        case 'I am a representative':
                          redirectUrl = '/alpha-apply-1c/#'
                          break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })

                  router.route('/alpha-apply-1c/1c-do-you-know-what-support-you-need')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['1c-do-you-know-what-support-you-need']) {
                        case 'yes':
                          redirectUrl = '/alpha-apply-1c/1c-task-list'
                          break
                        case 'no':
                          redirectUrl = '/alpha-apply-1c/#'
                          break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

                    router.route('/alpha-apply-1c/1c-appointee-or-representative')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['appointee-or-representative']) {
                          case 'I have an appointee':
                            redirectUrl = '/alpha-apply-1c/1c-appointee-details'
                            break
                          case 'I want to nominate a representative':
                            redirectUrl = '/alpha-apply-1c/1c-nominated-representative-details'
                            break
                            case 'I do not have an appointee or nominated representative':
                              redirectUrl = '/alpha-apply-1c/1c-contact-preferences'
                              break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


                     router.route('/alpha-apply-1d/1d-do-you-need-support-at-work')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['do-you-need-support-at-work']) {
                           case 'yes':
                             redirectUrl = '/alpha-apply-1d/1d-what-support-you-need'
                             break
                           case 'no':
                             redirectUrl = '/alpha-apply-1d/1d-type-of-travel-support'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })

    router.route('/alpha-apply-1c/1c-another-health-condition-or-disability-2')
    .post((req, res, next) => {
    let redirectUrl
    switch (req.body['1c-another-health-condition-or-disability-2']) {
    case 'Yes':
    redirectUrl = '/alpha-apply-1c/1c-about-health-condition-or-disability-2'
    break
    case 'No':
    redirectUrl = '/alpha-apply-1c/1c-about-your-health-condition-or-disability-check-your-answers-2'
    break

    default:
    redirectUrl = req.path
    break
    }
    res.redirect(redirectUrl)
    })


      router.route('/alpha-apply-1c/1c-another-health-condition-or-disability-3')
      .post((req, res, next) => {
      let redirectUrl
      switch (req.body['1c-another-health-condition-or-disability-3']) {
      case 'Yes':
      redirectUrl = '/alpha-apply-1c/#'
      break
      case 'No':
      redirectUrl = '/alpha-apply-1c/1c-about-your-health-condition-or-disability-check-your-answers-3'
      break

      default:
      redirectUrl = req.path
      break
      }
      res.redirect(redirectUrl)
      })


                     router.route('/alpha-apply-1c/1c-employment-status')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['1c-employment-status']) {
                           case 'Employed':
                             redirectUrl = '/alpha-apply-1c/1c-employment-job-title'
                             break
                           case 'Self-employed':
                             redirectUrl = '/alpha-apply-1c/1c-self-employment-job-title'
                             break
                               case 'About to start employment':
                                 redirectUrl = '/alpha-apply-1c/1c-about-to-start-employment-job-title'
                                 break
                               case 'About to start self-employment':
                                 redirectUrl = '/alpha-apply-1c/1c-about-to-start-self-employment-job-title'
                                 break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })


                     router.route('/alpha-apply-1c/1c-employment-full-time')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['employment-full-time']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1c/1c-employment-employer-name'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1c/1c-employment-hours-per-week'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })

                      router.route('/alpha-apply-1c/1c-self-employment-full-time')
                        .post((req, res, next) => {
                          let redirectUrl
                          switch (req.body['self-employment-full-time']) {
                            case 'Yes':
                              redirectUrl = '/alpha-apply-1c/1c-self-employment-workplace-address'
                              break
                            case 'No':
                              redirectUrl = '/alpha-apply-1c/1c-self-employment-hours-per-week'
                              break

                            default:
                              redirectUrl = req.path
                              break
                          }
                          res.redirect(redirectUrl)
                        })


                      router.route('/alpha-apply-1c/1c-about-to-start-employment-full-time')
                        .post((req, res, next) => {
                          let redirectUrl
                          switch (req.body['employment-full-time']) {
                            case 'Yes':
                              redirectUrl = '/alpha-apply-1c/1c-about-to-start-employment-employer-name'
                              break
                            case 'No':
                              redirectUrl = '/alpha-apply-1c/1c-about-to-start-employment-hours-per-week'
                              break

                            default:
                              redirectUrl = req.path
                              break
                          }
                          res.redirect(redirectUrl)
                        })

                       router.route('/alpha-apply-1c/1c-about-to-start-self-employment-full-time')
                         .post((req, res, next) => {
                           let redirectUrl
                           switch (req.body['self-employment-full-time']) {
                             case 'Yes':
                               redirectUrl = '/alpha-apply-1c/1c-about-to-start-self-employment-workplace-address'
                               break
                             case 'No':
                               redirectUrl = '/alpha-apply-1c/1c-about-to-start-self-employment-hours-per-week'
                               break

                             default:
                               redirectUrl = req.path
                               break
                           }
                           res.redirect(redirectUrl)
                         })


                    router.route('/alpha-apply-1c/1c-contact-someone-else')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['1c-contact-someone-else']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1c/1c-someone-else-details'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1c/1c-your-details-check-your-answers'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

    router.route('/alpha-apply-1c/1c-who-are-you-applying-for')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['1c-who-are-you-applying-for']) {
          case 'myself':
            redirectUrl = '/alpha-apply-1c/1c-eligibility-statement'
            break
          case 'I am an appointee':
            redirectUrl = '/alpha-apply-1c/1c-#'
            break
            case 'I am an appointee':
              redirectUrl = '/alpha-apply-1c/1c-#'
              break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })


      router.route('/alpha-apply-1c/1c-specialist-equipment-screener')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['specialist-equipment-screener']) {
            case 'Yes':
              redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-do-you-know-what-specialist-equipment-you-need'
              break
            case 'No':
              redirectUrl = '/alpha-apply-1c/1c-task-list'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

        router.route('/alpha-apply-1c/1c-specialist-equipment-do-you-know-what-specialist-equipment-you-need')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['specialist-equipment-do-you-know-what-specialist-equipment-you-need']) {
              case 'Yes, I know what I need':
                redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-workplace-assessment'
                break
              case 'No, I do not know what I need':
                redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-tell-us-ways-that-you-think-it-might-help'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })


          router.route('/alpha-apply-1c/1c-specialist-equipment-workplace-assessment')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['specialist-equipment-workplace-assessment']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-workplace-assessment-upload'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-type-of-equipment-1'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

           router.route('/alpha-apply-1c/1c-specialist-equipment-hmrc-table-1')
             .post((req, res, next) => {
               let redirectUrl
               switch (req.body['add-another']) {
                 case 'Yes':
                   redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-type-of-equipment-2'
                   break
                 case 'No':
                   redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-check-your-answers-#'
                   break

                 default:
                   redirectUrl = req.path
                   break
               }
               res.redirect(redirectUrl)
             })

             router.route('/alpha-apply-1c/1c-specialist-equipment-hmrc-table-3')
               .post((req, res, next) => {
                 let redirectUrl
                 switch (req.body['add-another-3']) {
                   case 'Yes':
                     redirectUrl = '/alpha-apply-1c/#'
                     break
                   case 'No':
                     redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-impact-of-not-having-it-3'
                     break

                   default:
                     redirectUrl = req.path
                     break
                 }
                 res.redirect(redirectUrl)
               })

               router.route('/alpha-apply-1c/1c-specialist-equipment-type-of-equipment-1')
                 .post((req, res, next) => {
                   let redirectUrl
                   switch (req.body['add-another-1']) {
                     case 'Yes':
                       redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-type-of-equipment-2'
                       break
                     case 'No':
                       redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-impact-of-not-having-it-1'
                       break

                     default:
                       redirectUrl = req.path
                       break
                   }
                   res.redirect(redirectUrl)
                 })

                 router.route('/alpha-apply-1c/1c-specialist-equipment-hmrc-table-2')
                   .post((req, res, next) => {
                     let redirectUrl
                     switch (req.body['add-another-2']) {
                       case 'Yes':
                         redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-type-of-equipment-3'
                         break
                       case 'No':
                         redirectUrl = '/alpha-apply-1c/1c-specialist-equipment-impact-of-not-having-it-2'
                         break

                       default:
                         redirectUrl = req.path
                         break
                     }
                     res.redirect(redirectUrl)
                   })

      router.route('/alpha-apply-1c/1c-support-worker-screener')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['support-worker-screener']) {
            case 'Yes':
              redirectUrl = '/alpha-apply-1c/1c-support-worker-do-you-know-what-support-worker-you-need'
              break
            case 'No':
              redirectUrl = '/alpha-apply-1c/1c-task-list'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

        router.route('/alpha-apply-1c/1c-support-worker-do-you-know-what-support-worker-you-need')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['support-worker-do-you-know-what-support-worker-you-need']) {
              case 'Yes, I know what I need':
                redirectUrl = '/alpha-apply-1c/1c-support-worker-that-you-need-1'
                break
              case 'No, I do not know what I need':
                redirectUrl = '/alpha-apply-1c/1c-support-worker-might-help'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

         router.route('/alpha-apply-1c/1c-support-worker-short-or-long-term-two-options')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['support-worker-short-or-long-term-two-options']) {
               case 'Long-term':
                 redirectUrl = '/alpha-apply-1c/1c-support-worker-how-many-hours-a-week-long-term'
                 break
               case 'Short-term':
                 redirectUrl = '/alpha-apply-1c/1c-support-worker-how-long-for'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })

          router.route('/alpha-apply-1c/1c-support-worker-do-you-have-a-quote-short-term-1')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['support-worker-do-you-have-a-quote-short-term-1']) {
                case 'Yes, I have quotes':
                  redirectUrl = '/alpha-apply-1c/#'
                  break
                case 'No, I do not have quotes':
                  redirectUrl = '/alpha-apply-1c/1c-support-worker-short-term-hmrc-table-1'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

            router.route('/alpha-apply-1c/1c-support-worker-providing-quotes-for-this-support-long-term-1')
              .post((req, res, next) => {
                let redirectUrl
                switch (req.body['support-worker-providing-quotes-for-this-support-long-term-1']) {
                  case 'Yes, I have quotes':
                    redirectUrl = '/alpha-apply-1c/1c-support-worker-quote-long-term-1'
                    break
                  case 'No, I do not have quotes':
                    redirectUrl = '/alpha-apply-1c/1c-support-worker-long-term-hmrc-table-1'
                    break

                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })

              router.route('/alpha-apply-1c/1c-support-worker-providing-quotes-for-this-support-short-term-1')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['support-worker-providing-quotes-for-this-support-short-term-1']) {
                    case 'Yes, I have quotes':
                      redirectUrl = '/alpha-apply-1c/1c-support-worker-quote-short-term-1'
                      break
                    case 'No, I do not have quotes':
                      redirectUrl = '/alpha-apply-1c/1c-support-worker-short-term-hmrc-table-1'
                      break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

                router.route('/alpha-apply-1c/1c-support-worker-long-term-hmrc-table-1-quote-1')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['support-worker-second-quote-long-term-1']) {
                      case 'Yes':
                        redirectUrl = '/alpha-apply-1c/1c-support-worker-quote-long-term-2'
                        break
                      case 'No':
                        redirectUrl = '/alpha-apply-1c/1c-support-worker-long-term-hmrc-table-2'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })

                  router.route('/alpha-apply-1c/1c-support-worker-long-term-hmrc-table-2-quote-1')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['support-worker-second-quote-long-term-3']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1c/1c-support-worker-quote-long-term-3'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1c/1c-support-worker-long-term-hmrc-table-3'
                          break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })