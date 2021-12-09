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

                    router.route('/alpha-apply-1c/1c-your-health-condition-or-disability-1')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['add-another-1']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1c/1c-your-health-condition-or-disability-2'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1c/1c-your-health-condition-or-disability-affects-your-work-1'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                      router.route('/alpha-apply-1c/1c-your-health-condition-or-disability-hrmc-table-2')
                        .post((req, res, next) => {
                          let redirectUrl
                          switch (req.body['add-another-2']) {
                            case 'Yes':
                              redirectUrl = '/alpha-apply-1c/1c-your-health-condition-or-disability-3'
                              break
                            case 'No':
                              redirectUrl = '/alpha-apply-1c/1c-your-health-condition-or-disability-affects-your-work-2'
                              break

                            default:
                              redirectUrl = req.path
                              break
                          }
                          res.redirect(redirectUrl)
                        })


                       router.route('/alpha-apply-1c/1c-extra-information-screener')
                         .post((req, res, next) => {
                           let redirectUrl
                           switch (req.body['extra-information-screener']) {
                             case 'Yes':
                               redirectUrl = '/alpha-apply-1c/1c-extra-information-textbox'
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

                         router.route('/alpha-apply-1c/1c-changes-to-your-vehicle-screener')
                           .post((req, res, next) => {
                             let redirectUrl
                             switch (req.body['changes-to-your-vehicle-screener']) {
                               case 'Yes':
                                 redirectUrl = '/alpha-apply-1c/1c-changes-to-your-vehicle-vehicle-type'
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

                           router.route('/alpha-apply-1c/1c-workplace-adaptations-screener')
                             .post((req, res, next) => {
                               let redirectUrl
                               switch (req.body['workplace-adaptations-screener']) {
                                 case 'Yes, I need changes to my workplace':
                                   redirectUrl = '/alpha-apply-1c/1c-workplace-adaptations-contacting-your-employer'
                                   break
                                 case 'No, I do not need changes to my workplace':
                                   redirectUrl = '/alpha-apply-1c/1c-task-list'
                                   break

                                 default:
                                   redirectUrl = req.path
                                   break
                               }
                               res.redirect(redirectUrl)
                             })

                             router.route('/alpha-apply-1c/1c-workplace-adaptations-do-you-know-what-you-need')
                               .post((req, res, next) => {
                                 let redirectUrl
                                 switch (req.body['workplace-adaptations-do-you-know-what-you-need']) {
                                   case 'Yes, I know what changes should be made':
                                     redirectUrl = '/alpha-apply-1c/1c-workplace-adaptations-details'
                                     break
                                   case 'No, I do not know what changes should be made':
                                     redirectUrl = '/alpha-apply-1c/1c-workplace-adaptations-check-your-answers-1'
                                     break

                                   default:
                                     redirectUrl = req.path
                                     break
                                 }
                                 res.redirect(redirectUrl)
                               })

    router.route('/alpha-apply-1c/1c-travelling-to-and-from-work-screener')
    .post((req, res, next) => {
       let redirectUrl
        switch (req.body['travelling-to-and-from-work-screener']) {
         case 'Yes, it is difficult for me to drive or get public transport':
           redirectUrl = '/alpha-apply-1c/1c-travelling-to-and-from-work-how-do-you-get-to-work-at-the-moment'
         break
         case 'No, it is not difficult for me to drive or get public transport':
           redirectUrl = '/alpha-apply-1c/1c-task-list'
         break

         default:
           redirectUrl = req.path
         break
         }
           res.redirect(redirectUrl)
         })

      router.route('/alpha-apply-1c/1c-travel-during-work-screener')
      .post((req, res, next) => {
         let redirectUrl
          switch (req.body['travel-during-work-screener']) {
           case 'Yes':
             redirectUrl = '/alpha-apply-1c/1c-travel-during-work-support-you-may-need'
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

        router.route('/alpha-apply-1c/1c-mental-health-support-screener')
        .post((req, res, next) => {
           let redirectUrl
            switch (req.body['mental-health-support-screener']) {
             case 'Yes':
               redirectUrl = '/alpha-apply-1c/1c-mental-health-support-check-your-answers'
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

        router.route('/alpha-apply-1d/1d-bsl-support')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['1d-bsl-support']) {
              case 'yes':
                redirectUrl = '/alpha-apply-1d/1d-bsl-eligibility-statement'
                break
              case 'no':
                redirectUrl = '/alpha-apply-1d/1d-accessibility-information'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

 router.route('/alpha-apply-1d/1d-do-you-need-support')
   .post((req, res, next) => {
     let redirectUrl
     switch (req.body['do-you-need-support']) {
       case 'yes':
         redirectUrl = '/alpha-apply-1d/1d-bsl-support'
         break
       case 'no':
         redirectUrl = '/alpha-apply-1d/1d-eligibility-statement'
         break

       default:
         redirectUrl = req.path
         break
     }
     res.redirect(redirectUrl)
   })

router.route('/alpha-apply-1d/1d-bsl-support')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['1d-bsl-support']) {
      case 'yes':
        redirectUrl = '/alpha-apply-1d/#'
        break
      case 'no':
        redirectUrl = '/alpha-apply-1d/1d-accessibility-information'
        break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })


  router.route('/alpha-apply-1d/1d-who-are-you-applying-for')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['1d-who-are-you-applying-for']) {
        case 'myself':
          redirectUrl = '/alpha-apply-1d/1d-eligibility-statement'
          break
        case 'someone else':
          redirectUrl = '/alpha-apply-1d/1d-#'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })

   router.route('/alpha-apply-1d/1d-esa')
     .post((req, res, next) => {
       let redirectUrl
       switch (req.body['1d-esa']) {
         case 'yes':
           redirectUrl = '/alpha-apply-1d/1d-less-than-16-hours'
           break
         case 'yes-but':
           redirectUrl = '/alpha-apply-1d/1d-you-may-be-eligible-blue'
           break
            case 'no':
              redirectUrl = '/alpha-apply-1d/1d-you-may-be-eligible-blue'
              break

         default:
           redirectUrl = req.path
           break
       }
       res.redirect(redirectUrl)
     })

    router.route('/alpha-apply-1d/1d-less-than-16-hours')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['1d-less-than-16-hours']) {
          case 'yes':
            redirectUrl = '/alpha-apply-1d/1d-you-may-be-eligible-blue'
            break
          case 'no':
            redirectUrl = '/alpha-apply-1d/1d-paid-supported-permitted-work'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

    router.route('/alpha-apply-1d/1d-paid-supported-permitted-work')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['1d-paid-supported-permitted-work']) {
          case 'yes':
            redirectUrl = '/alpha-apply-1d/1d-you-may-be-eligible-blue'
            break
          case 'no':
            redirectUrl = '/alpha-apply-1d/1d-ineligible'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

          router.route('/alpha-apply-1d/1d-nominated-representative')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['1d-nominated-representative']) {
                case 'yes':
                  redirectUrl = '/alpha-apply-1d/1d-nominated-representative-details'
                  break
                case 'no':
                  redirectUrl = '/alpha-apply-1d/1d-contact-preferences'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

            router.route('/alpha-apply-1d/1d-appointee')
              .post((req, res, next) => {
                let redirectUrl
                switch (req.body['1d-appointee']) {
                  case 'yes':
                    redirectUrl = '/alpha-apply-1d/1d-appointee-details'
                    break
                  case 'no':
                    redirectUrl = '/alpha-apply-1d/1d-nominated-representative'
                    break

                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })

              router.route('/alpha-apply-1d/1d-bsl-who-are-you-applying-for')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['1d-bsl-who-are-you-applying-for']) {
                    case 'myself':
                      redirectUrl = '/alpha-apply-1d/1d-bsl-eligibility-statement'
                      break
                    case 'I am an appointee':
                      redirectUrl = '/alpha-apply-1d/#'
                      break
                      case 'I am a representative':
                        redirectUrl = '/alpha-apply-1d/#'
                        break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

                router.route('/alpha-apply-1d/1d-do-you-know-what-support-you-need')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['1d-do-you-know-what-support-you-need']) {
                      case 'yes':
                        redirectUrl = '/alpha-apply-1d/1d-task-list'
                        break
                      case 'no':
                        redirectUrl = '/alpha-apply-1d/#'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })

                  router.route('/alpha-apply-1d/1d-appointee-or-representative')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['appointee-or-representative']) {
                        case 'I have an appointee':
                          redirectUrl = '/alpha-apply-1d/1d-appointee-details'
                          break
                        case 'I want to nominate a representative':
                          redirectUrl = '/alpha-apply-1d/1d-nominated-representative-details'
                          break
                          case 'I do not have an appointee or nominated representative':
                            redirectUrl = '/alpha-apply-1d/1d-contact-preferences'
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

  router.route('/alpha-apply-1d/1d-another-health-condition-or-disability-2')
  .post((req, res, next) => {
  let redirectUrl
  switch (req.body['1d-another-health-condition-or-disability-2']) {
  case 'Yes':
  redirectUrl = '/alpha-apply-1d/1d-about-health-condition-or-disability-2'
  break
  case 'No':
  redirectUrl = '/alpha-apply-1d/1d-about-your-health-condition-or-disability-check-your-answers-2'
  break

  default:
  redirectUrl = req.path
  break
  }
  res.redirect(redirectUrl)
  })


    router.route('/alpha-apply-1d/1d-another-health-condition-or-disability-3')
    .post((req, res, next) => {
    let redirectUrl
    switch (req.body['1d-another-health-condition-or-disability-3']) {
    case 'Yes':
    redirectUrl = '/alpha-apply-1d/#'
    break
    case 'No':
    redirectUrl = '/alpha-apply-1d/1d-about-your-health-condition-or-disability-check-your-answers-3'
    break

    default:
    redirectUrl = req.path
    break
    }
    res.redirect(redirectUrl)
    })


                   router.route('/alpha-apply-1d/1d-employment-status')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['1d-employment-status']) {
                         case 'Employed':
                           redirectUrl = '/alpha-apply-1d/1d-employment-job-title'
                           break
                         case 'Self-employed':
                           redirectUrl = '/alpha-apply-1d/1d-self-employment-job-title'
                           break
                             case 'About to start employment':
                               redirectUrl = '/alpha-apply-1d/1d-about-to-start-employment-job-title'
                               break
                             case 'About to start self-employment':
                               redirectUrl = '/alpha-apply-1d/1d-about-to-start-self-employment-job-title'
                               break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })


                   router.route('/alpha-apply-1d/1d-employment-full-time')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['employment-full-time']) {
                         case 'Yes':
                           redirectUrl = '/alpha-apply-1d/1d-employment-employer-name'
                           break
                         case 'No':
                           redirectUrl = '/alpha-apply-1d/1d-employment-hours-per-week'
                           break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })

                    router.route('/alpha-apply-1d/1d-self-employment-full-time')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['self-employment-full-time']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1d/1d-self-employment-workplace-address'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1d/1d-self-employment-hours-per-week'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


                    router.route('/alpha-apply-1d/1d-about-to-start-employment-full-time')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['employment-full-time']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1d/1d-about-to-start-employment-employer-name'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1d/1d-about-to-start-employment-hours-per-week'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                     router.route('/alpha-apply-1d/1d-about-to-start-self-employment-full-time')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['self-employment-full-time']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1d/1d-about-to-start-self-employment-workplace-address'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1d/1d-about-to-start-self-employment-hours-per-week'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })


                  router.route('/alpha-apply-1d/1d-contact-someone-else')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['1d-contact-someone-else']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1d/1d-someone-else-details'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1d/1d-your-details-check-your-answers'
                          break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

  router.route('/alpha-apply-1d/1d-who-are-you-applying-for')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['1d-who-are-you-applying-for']) {
        case 'myself':
          redirectUrl = '/alpha-apply-1d/1d-eligibility-statement'
          break
        case 'I am an appointee':
          redirectUrl = '/alpha-apply-1d/1d-#'
          break
          case 'I am an appointee':
            redirectUrl = '/alpha-apply-1d/1d-#'
            break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })


    router.route('/alpha-apply-1d/1d-specialist-equipment-screener')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['specialist-equipment-screener']) {
          case 'Yes':
            redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-do-you-know-what-specialist-equipment-you-need'
            break
          case 'No':
            redirectUrl = '/alpha-apply-1d/1d-task-list'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

      router.route('/alpha-apply-1d/1d-specialist-equipment-do-you-know-what-specialist-equipment-you-need')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['specialist-equipment-do-you-know-what-specialist-equipment-you-need']) {
            case 'Yes, I know what I need':
              redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-type-of-equipment-1'
              break
            case 'No, I do not know what I need':
              redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-tell-us-ways-that-you-think-it-might-help'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })


        router.route('/alpha-apply-1d/1d-specialist-equipment-workplace-assessment')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['specialist-equipment-workplace-assessment']) {
              case 'Yes':
                redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-workplace-assessment-upload'
                break
              case 'No':
                redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-type-of-equipment-1'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

         router.route('/alpha-apply-1d/1d-specialist-equipment-hmrc-table-1')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['add-another']) {
               case 'Yes':
                 redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-type-of-equipment-2'
                 break
               case 'No':
                 redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-check-your-answers-#'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })

           router.route('/alpha-apply-1d/1d-specialist-equipment-hmrc-table-3')
             .post((req, res, next) => {
               let redirectUrl
               switch (req.body['add-another-3']) {
                 case 'Yes':
                   redirectUrl = '/alpha-apply-1d/#'
                   break
                 case 'No':
                   redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-impact-of-not-having-it-3'
                   break

                 default:
                   redirectUrl = req.path
                   break
               }
               res.redirect(redirectUrl)
             })

             router.route('/alpha-apply-1d/1d-specialist-equipment-type-of-equipment-1')
               .post((req, res, next) => {
                 let redirectUrl
                 switch (req.body['add-another-1']) {
                   case 'Yes':
                     redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-type-of-equipment-2'
                     break
                   case 'No':
                     redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-impact-of-not-having-it-1'
                     break

                   default:
                     redirectUrl = req.path
                     break
                 }
                 res.redirect(redirectUrl)
               })

               router.route('/alpha-apply-1d/1d-specialist-equipment-hmrc-table-2')
                 .post((req, res, next) => {
                   let redirectUrl
                   switch (req.body['add-another-2']) {
                     case 'Yes':
                       redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-type-of-equipment-3'
                       break
                     case 'No':
                       redirectUrl = '/alpha-apply-1d/1d-specialist-equipment-impact-of-not-having-it-2'
                       break

                     default:
                       redirectUrl = req.path
                       break
                   }
                   res.redirect(redirectUrl)
                 })

    router.route('/alpha-apply-1d/1d-support-worker-screener')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['support-worker-screener']) {
          case 'Yes':
            redirectUrl = '/alpha-apply-1d/1d-support-worker-do-you-know-what-support-worker-you-need'
            break
          case 'No':
            redirectUrl = '/alpha-apply-1d/1d-task-list'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

      router.route('/alpha-apply-1d/1d-support-worker-do-you-know-what-support-worker-you-need')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['support-worker-do-you-know-what-support-worker-you-need']) {
            case 'Yes, I know what I need':
              redirectUrl = '/alpha-apply-1d/1d-support-worker-that-you-need-1'
              break
            case 'No, I do not know what I need':
              redirectUrl = '/alpha-apply-1d/1d-support-worker-short-or-long-term'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

       router.route('/alpha-apply-1d/1d-support-worker-short-or-long-term-two-options')
         .post((req, res, next) => {
           let redirectUrl
           switch (req.body['support-worker-short-or-long-term-two-options']) {
             case 'No, I need a support worker on a permanent basis':
               redirectUrl = '/alpha-apply-1d/1d-support-worker-how-many-hours-a-week-long-term'
               break
             case 'Yes, I need a support worker on a temporary basis':
               redirectUrl = '/alpha-apply-1d/1d-support-worker-how-long-for'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })

        router.route('/alpha-apply-1d/1d-support-worker-do-you-have-a-quote-short-term-1')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['support-worker-do-you-have-a-quote-short-term-1']) {
              case 'Yes, I have quotes':
                redirectUrl = '/alpha-apply-1d/#'
                break
              case 'No, I do not have quotes':
                redirectUrl = '/alpha-apply-1d/1d-support-worker-short-term-hmrc-table-1'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

          router.route('/alpha-apply-1d/1d-support-worker-providing-quotes-for-this-support-long-term-1')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['support-worker-providing-quotes-for-this-support-long-term-1']) {
                case 'Yes, I have quotes':
                  redirectUrl = '/alpha-apply-1d/1d-support-worker-quote-long-term-1'
                  break
                case 'No, I do not have quotes':
                  redirectUrl = '/alpha-apply-1d/1d-support-worker-long-term-hmrc-table-1'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

            router.route('/alpha-apply-1d/1d-support-worker-providing-quotes-for-this-support-short-term-1')
              .post((req, res, next) => {
                let redirectUrl
                switch (req.body['support-worker-providing-quotes-for-this-support-short-term-1']) {
                  case 'Yes, I have quotes':
                    redirectUrl = '/alpha-apply-1d/1d-support-worker-quote-short-term-1'
                    break
                  case 'No, I do not have quotes':
                    redirectUrl = '/alpha-apply-1d/1d-support-worker-short-term-hmrc-table-1'
                    break

                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })

              router.route('/alpha-apply-1d/1d-support-worker-long-term-hmrc-table-1-quote-1')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['support-worker-second-quote-long-term-1']) {
                    case 'Yes':
                      redirectUrl = '/alpha-apply-1d/1d-support-worker-quote-long-term-2'
                      break
                    case 'No':
                      redirectUrl = '/alpha-apply-1d/1d-support-worker-long-term-hmrc-table-2'
                      break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

                router.route('/alpha-apply-1d/1d-support-worker-long-term-hmrc-table-2-quote-1')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['support-worker-second-quote-long-term-3']) {
                      case 'Yes':
                        redirectUrl = '/alpha-apply-1d/1d-support-worker-quote-long-term-3'
                        break
                      case 'No':
                        redirectUrl = '/alpha-apply-1d/1d-support-worker-long-term-hmrc-table-3'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })

                  router.route('/alpha-apply-1d/1d-your-health-condition-or-disability-1')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['add-another-1']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1d/1d-your-health-condition-or-disability-2'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1d/1d-your-health-condition-or-disability-affects-your-work-1'
                          break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

                    router.route('/alpha-apply-1d/1d-your-health-condition-or-disability-hrmc-table-2')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['add-another-2']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1d/1d-your-health-condition-or-disability-3'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1d/1d-your-health-condition-or-disability-affects-your-work-2'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


                     router.route('/alpha-apply-1d/1d-extra-information-screener')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['extra-information-screener']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1d/1d-extra-information-textbox'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1d/1d-task-list'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })

                       router.route('/alpha-apply-1d/1d-changes-to-your-vehicle-screener')
                         .post((req, res, next) => {
                           let redirectUrl
                           switch (req.body['changes-to-your-vehicle-screener']) {
                             case 'Yes':
                               redirectUrl = '/alpha-apply-1d/1d-changes-to-your-vehicle-vehicle-type'
                               break
                             case 'No':
                               redirectUrl = '/alpha-apply-1d/1d-task-list'
                               break

                             default:
                               redirectUrl = req.path
                               break
                           }
                           res.redirect(redirectUrl)
                         })

                         router.route('/alpha-apply-1d/1d-workplace-adaptations-screener')
                           .post((req, res, next) => {
                             let redirectUrl
                             switch (req.body['workplace-adaptations-screener']) {
                               case 'Yes, I need changes to my workplace':
                                 redirectUrl = '/alpha-apply-1d/1d-workplace-adaptations-contacting-your-employer'
                                 break
                               case 'No, I do not need changes to my workplace':
                                 redirectUrl = '/alpha-apply-1d/1d-task-list'
                                 break

                               default:
                                 redirectUrl = req.path
                                 break
                             }
                             res.redirect(redirectUrl)
                           })

                           router.route('/alpha-apply-1d/1d-workplace-adaptations-do-you-know-what-you-need')
                             .post((req, res, next) => {
                               let redirectUrl
                               switch (req.body['workplace-adaptations-do-you-know-what-you-need']) {
                                 case 'Yes, I know what changes should be made':
                                   redirectUrl = '/alpha-apply-1d/1d-workplace-adaptations-details'
                                   break
                                 case 'No, I do not know what changes should be made':
                                   redirectUrl = '/alpha-apply-1d/1d-workplace-adaptations-check-your-answers-1'
                                   break

                                 default:
                                   redirectUrl = req.path
                                   break
                               }
                               res.redirect(redirectUrl)
                             })

  router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-screener')
  .post((req, res, next) => {
     let redirectUrl
      switch (req.body['travelling-to-and-from-work-screener']) {
       case 'Yes':
         redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-do-you-get-to-work-at-the-moment'
       break
       case 'No':
         redirectUrl = '/alpha-apply-1d/1d-task-list'
       break

       default:
         redirectUrl = req.path
       break
       }
         res.redirect(redirectUrl)
       })

    router.route('/alpha-apply-1d/1d-travel-during-work-screener')
    .post((req, res, next) => {
       let redirectUrl
        switch (req.body['travel-during-work-screener']) {
         case 'Yes':
           redirectUrl = '/alpha-apply-1d/1d-travel-during-work-support-you-may-need'
         break
         case 'No':
           redirectUrl = '/alpha-apply-1d/1d-task-list'
         break

         default:
           redirectUrl = req.path
         break
         }
           res.redirect(redirectUrl)
         })

      router.route('/alpha-apply-1d/1d-mental-health-support-screener')
      .post((req, res, next) => {
         let redirectUrl
          switch (req.body['mental-health-support-screener']) {
           case 'Yes':
             redirectUrl = '/alpha-apply-1d/1d-mental-health-support-check-your-answers'
           break
           case 'No':
             redirectUrl = '/alpha-apply-1d/1d-task-list'
           break

           default:
             redirectUrl = req.path
           break
           }
             res.redirect(redirectUrl)
           })

          router.route('/alpha-apply-1d/1d-support-worker-providing-quotes-for-this-support-short-term-1')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['support-worker-providing-quotes-for-this-support-short-term-1']) {
                case 'Yes, I have quotes':
                  redirectUrl = '/alpha-apply-1d/1d-support-worker-quote-short-term-1'
                  break
                case 'No, I do not have quotes':
                  redirectUrl = '/alpha-apply-1d/1d-support-worker-short-term-hmrc-table-1'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

              router.route('/alpha-apply-1d/1d-support-worker-short-term-hmrc-table-1-quote-1')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['support-worker-second-quote-short-term-1']) {
                    case 'Yes':
                      redirectUrl = '/alpha-apply-1d/1d-support-worker-quote-short-term-2'
                      break
                    case 'No':
                      redirectUrl = '/alpha-apply-1d/1d-support-worker-short-term-hmrc-table-2'
                      break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

                  router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-what-support-do-you-need')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['travelling-to-and-from-work-what-support-do-you-need']) {
                        case 'Taxi':
                          redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-would-meet-your-needs-taxi'
                          break
                        case 'Lift from a friend, colleague or family member':
                          redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-would-meet-your-needs-lift'
                          break
                        case 'Something else':
      redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-would-meet-your-needs-something-else'
                          break
                        case 'I am not sure':
    redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-many-journeys-not-sure'
                          break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

                  router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-locations-taxi')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['travelling-to-and-from-work-locations-taxi']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-providing-quotes-taxi'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-many-miles-taxi'
                          break
                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

                    router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-locations-lift')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['travelling-to-and-from-work-locations-lift']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-check-your-answers-lift'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-many-miles-lift'
                            break
                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                     router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-locations-not-sure')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['travelling-to-and-from-work-locations-not-sure']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-check-your-answers-not-sure'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-many-miles-not-sure'
                             break
                           case "I'm not sure":
                             redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-check-your-answers-not-sure'
                             break
                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })

                     router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-locations-something-else')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['travelling-to-and-from-work-locations-something-else']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-check-your-answers-something-else'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-how-many-miles-something-else'
                             break
                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })

            router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-providing-quotes-taxi')
              .post((req, res, next) => {
                let redirectUrl
                switch (req.body['travelling-to-and-from-work-providing-quotes-taxi']) {
                  case 'Yes, I have quotes':
                    redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-quote-1'
                    break
                  case 'No, I do not have quotes':
                    redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-check-your-answers-taxi-1'
                    break

                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })

               router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-hmrc-table-1-quote-1')
                 .post((req, res, next) => {
                   let redirectUrl
                   switch (req.body['travelling-to-and-from-work-hmrc-table-1-quote-1']) {
                     case 'Yes':
                       redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-quote-2'
                       break
                     case 'No':
                       redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-hmrc-table-2'
                       break

                     default:
                       redirectUrl = req.path
                       break
                   }
                   res.redirect(redirectUrl)
                 })

                router.route('/alpha-apply-1d/1d-travelling-to-and-from-work-hmrc-table-2-quote-1')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['travelling-to-and-from-work-hmrc-table-2-quote-1']) {
                      case 'Yes':
                        redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-quote-3'
                        break
                      case 'No':
                        redirectUrl = '/alpha-apply-1d/1d-travelling-to-and-from-work-hmrc-table-3'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })


                router.route('/alpha-apply-1d/1d-benefits')
                    .post((req, res, next) => {
                        const selections = req.body.benefits;
                         // Stay on same page if not any option selected
                         redirectUrl = '/alpha-apply-1d/1d-ineligible-benefits'
                            console.log(selections + ' length = ' + selections.length)
                              if (selections.length === 1)
                                 {
                                     // Handle single selections
                              if(selections[0].trim() === "Employment Support Allowance") {
                                redirectUrl = '/alpha-apply-1d/1d-esa'
                                   } else if(selections[0].trim() === 'None of these') {
                                redirectUrl = '/alpha-apply-1d/1d-you-may-be-eligible-blue'
                                    }
                                    } else {
                                 // Handle Multiple selections
                            redirectUrl = '/alpha-apply-1d/1d-ineligible-benefits'
                                      }
                                    res.redirect(redirectUrl)
                                          })

         router.route('/alpha-apply-1e/1e-bsl-support')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['1e-bsl-support']) {
               case 'yes':
                 redirectUrl = '/alpha-apply-1e/1e-bsl-eligibility-statement'
                 break
               case 'no':
                 redirectUrl = '/alpha-apply-1e/1e-accessibility-information'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })

  router.route('/alpha-apply-1e/1e-do-you-need-support')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['do-you-need-support']) {
        case 'yes':
          redirectUrl = '/alpha-apply-1e/1e-accessibility-information'
          break
        case 'no':
          redirectUrl = '/alpha-apply-1e/1e-eligibility-statement'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })

 router.route('/alpha-apply-1e/1e-bsl-support')
   .post((req, res, next) => {
     let redirectUrl
     switch (req.body['1e-bsl-support']) {
       case 'yes':
         redirectUrl = '/alpha-apply-1e/#'
         break
       case 'no':
         redirectUrl = '/alpha-apply-1e/1e-accessibility-information'
         break

       default:
         redirectUrl = req.path
         break
     }
     res.redirect(redirectUrl)
   })


   router.route('/alpha-apply-1e/1e-who-are-you-applying-for')
     .post((req, res, next) => {
       let redirectUrl
       switch (req.body['1e-who-are-you-applying-for']) {
         case 'myself':
           redirectUrl = '/alpha-apply-1e/1e-eligibility-statement'
           break
         case 'someone else':
           redirectUrl = '/alpha-apply-1e/1e-#'
           break

         default:
           redirectUrl = req.path
           break
       }
       res.redirect(redirectUrl)
     })

    router.route('/alpha-apply-1e/1e-esa')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['1e-esa']) {
          case 'yes':
            redirectUrl = '/alpha-apply-1e/1e-less-than-16-hours'
            break
          case 'yes-but':
            redirectUrl = '/alpha-apply-1e/1e-you-may-be-eligible-blue'
            break
             case 'no':
               redirectUrl = '/alpha-apply-1e/1e-you-may-be-eligible-blue'
               break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

     router.route('/alpha-apply-1e/1e-less-than-16-hours')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['1e-less-than-16-hours']) {
           case 'yes':
             redirectUrl = '/alpha-apply-1e/1e-you-may-be-eligible-blue'
             break
           case 'no':
             redirectUrl = '/alpha-apply-1e/1e-paid-supported-permitted-work'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })

     router.route('/alpha-apply-1e/1e-paid-supported-permitted-work')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['1e-paid-supported-permitted-work']) {
           case 'yes':
             redirectUrl = '/alpha-apply-1e/1e-you-may-be-eligible-blue'
             break
           case 'no':
             redirectUrl = '/alpha-apply-1e/1e-ineligible'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })

           router.route('/alpha-apply-1e/1e-nominated-representative')
             .post((req, res, next) => {
               let redirectUrl
               switch (req.body['1e-nominated-representative']) {
                 case 'yes':
                   redirectUrl = '/alpha-apply-1e/1e-nominated-representative-details'
                   break
                 case 'no':
                   redirectUrl = '/alpha-apply-1e/1e-contact-preferences'
                   break

                 default:
                   redirectUrl = req.path
                   break
               }
               res.redirect(redirectUrl)
             })

             router.route('/alpha-apply-1e/1e-appointee')
               .post((req, res, next) => {
                 let redirectUrl
                 switch (req.body['1e-appointee']) {
                   case 'yes':
                     redirectUrl = '/alpha-apply-1e/1e-appointee-details'
                     break
                   case 'no':
                     redirectUrl = '/alpha-apply-1e/1e-nominated-representative'
                     break

                   default:
                     redirectUrl = req.path
                     break
                 }
                 res.redirect(redirectUrl)
               })

               router.route('/alpha-apply-1e/1e-bsl-who-are-you-applying-for')
                 .post((req, res, next) => {
                   let redirectUrl
                   switch (req.body['1e-bsl-who-are-you-applying-for']) {
                     case 'myself':
                       redirectUrl = '/alpha-apply-1e/1e-bsl-eligibility-statement'
                       break
                     case 'I am an appointee':
                       redirectUrl = '/alpha-apply-1e/#'
                       break
                       case 'I am a representative':
                         redirectUrl = '/alpha-apply-1e/#'
                         break

                     default:
                       redirectUrl = req.path
                       break
                   }
                   res.redirect(redirectUrl)
                 })

                 router.route('/alpha-apply-1e/1e-do-you-know-what-support-you-need')
                   .post((req, res, next) => {
                     let redirectUrl
                     switch (req.body['1e-do-you-know-what-support-you-need']) {
                       case 'yes':
                         redirectUrl = '/alpha-apply-1e/1e-task-list'
                         break
                       case 'no':
                         redirectUrl = '/alpha-apply-1e/#'
                         break

                       default:
                         redirectUrl = req.path
                         break
                     }
                     res.redirect(redirectUrl)
                   })

                   router.route('/alpha-apply-1e/1e-appointee-or-representative')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['appointee-or-representative']) {
                         case 'I have an appointee':
                           redirectUrl = '/alpha-apply-1e/1e-appointee-details'
                           break
                         case 'I want to nominate a representative':
                           redirectUrl = '/alpha-apply-1e/1e-nominated-representative-details'
                           break
                           case 'I do not have an appointee or nominated representative':
                             redirectUrl = '/alpha-apply-1e/1e-contact-preferences'
                             break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })


                    router.route('/alpha-apply-1e/1e-do-you-need-support-at-work')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['do-you-need-support-at-work']) {
                          case 'yes':
                            redirectUrl = '/alpha-apply-1e/1e-what-support-you-need'
                            break
                          case 'no':
                            redirectUrl = '/alpha-apply-1e/1e-type-of-travel-support'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

   router.route('/alpha-apply-1e/1e-another-health-condition-or-disability-2')
   .post((req, res, next) => {
   let redirectUrl
   switch (req.body['1e-another-health-condition-or-disability-2']) {
   case 'Yes':
   redirectUrl = '/alpha-apply-1e/1e-about-health-condition-or-disability-2'
   break
   case 'No':
   redirectUrl = '/alpha-apply-1e/1e-about-your-health-condition-or-disability-check-your-answers-2'
   break

   default:
   redirectUrl = req.path
   break
   }
   res.redirect(redirectUrl)
   })


     router.route('/alpha-apply-1e/1e-another-health-condition-or-disability-3')
     .post((req, res, next) => {
     let redirectUrl
     switch (req.body['1e-another-health-condition-or-disability-3']) {
     case 'Yes':
     redirectUrl = '/alpha-apply-1e/#'
     break
     case 'No':
     redirectUrl = '/alpha-apply-1e/1e-about-your-health-condition-or-disability-check-your-answers-3'
     break

     default:
     redirectUrl = req.path
     break
     }
     res.redirect(redirectUrl)
     })


                    router.route('/alpha-apply-1e/1e-employment-status')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['1e-employment-status']) {
                          case 'Employed':
                            redirectUrl = '/alpha-apply-1e/1e-employment-job-title'
                            break
                          case 'Self-employed':
                            redirectUrl = '/alpha-apply-1e/1e-self-employment-job-title'
                            break
                              case 'About to start employment':
                                redirectUrl = '/alpha-apply-1e/1e-about-to-start-employment-job-title'
                                break
                              case 'About to start self-employment':
                                redirectUrl = '/alpha-apply-1e/1e-about-to-start-self-employment-job-title'
                                break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


                    router.route('/alpha-apply-1e/1e-employment-full-time')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['employment-full-time']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1e/1e-employment-employer-name'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1e/1e-employment-hours-per-week'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                     router.route('/alpha-apply-1e/1e-self-employment-full-time')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['self-employment-full-time']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1e/1e-self-employment-workplace-address'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1e/1e-self-employment-hours-per-week'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })


                     router.route('/alpha-apply-1e/1e-about-to-start-employment-full-time')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['employment-full-time']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1e/1e-about-to-start-employment-employer-name'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1e/1e-about-to-start-employment-hours-per-week'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })

                      router.route('/alpha-apply-1e/1e-about-to-start-self-employment-full-time')
                        .post((req, res, next) => {
                          let redirectUrl
                          switch (req.body['self-employment-full-time']) {
                            case 'Yes':
                              redirectUrl = '/alpha-apply-1e/1e-about-to-start-self-employment-workplace-address'
                              break
                            case 'No':
                              redirectUrl = '/alpha-apply-1e/1e-about-to-start-self-employment-hours-per-week'
                              break

                            default:
                              redirectUrl = req.path
                              break
                          }
                          res.redirect(redirectUrl)
                        })


                   router.route('/alpha-apply-1e/1e-contact-someone-else')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['1e-contact-someone-else']) {
                         case 'Yes':
                           redirectUrl = '/alpha-apply-1e/1e-someone-else-details'
                           break
                         case 'No':
                           redirectUrl = '/alpha-apply-1e/1e-your-details-check-your-answers'
                           break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })

   router.route('/alpha-apply-1e/1e-who-are-you-applying-for')
     .post((req, res, next) => {
       let redirectUrl
       switch (req.body['1e-who-are-you-applying-for']) {
         case 'myself':
           redirectUrl = '/alpha-apply-1e/1e-eligibility-statement'
           break
         case 'I am an appointee':
           redirectUrl = '/alpha-apply-1e/1e-#'
           break
           case 'I am an appointee':
             redirectUrl = '/alpha-apply-1e/1e-#'
             break

         default:
           redirectUrl = req.path
           break
       }
       res.redirect(redirectUrl)
     })


                   router.route('/alpha-apply-1e/1e-your-health-condition-or-disability-1')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['add-another-1']) {
                         case 'Yes':
                           redirectUrl = '/alpha-apply-1e/1e-your-health-condition-or-disability-2'
                           break
                         case 'No':
                           redirectUrl = '/alpha-apply-1e/1e-your-health-condition-or-disability-affects-your-work-1'
                           break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })

                     router.route('/alpha-apply-1e/1e-your-health-condition-or-disability-hrmc-table-2')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['add-another-2']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1e/1e-your-health-condition-or-disability-3'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1e/1e-your-health-condition-or-disability-affects-your-work-2'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })


                      router.route('/alpha-apply-1e/1e-extra-information-screener')
                        .post((req, res, next) => {
                          let redirectUrl
                          switch (req.body['extra-information-screener']) {
                            case 'Yes':
                              redirectUrl = '/alpha-apply-1e/1e-extra-information-textbox'
                              break
                            case 'No':
                              redirectUrl = '/alpha-apply-1e/1e-task-list'
                              break

                            default:
                              redirectUrl = req.path
                              break
                          }
                          res.redirect(redirectUrl)
                        })

                        router.route('/alpha-apply-1e/1e-changes-to-your-vehicle-screener')
                          .post((req, res, next) => {
                            let redirectUrl
                            switch (req.body['changes-to-your-vehicle-screener']) {
                              case 'Yes':
                                redirectUrl = '/alpha-apply-1e/1e-changes-to-your-vehicle-vehicle-type'
                                break
                              case 'No':
                                redirectUrl = '/alpha-apply-1e/1e-task-list'
                                break

                              default:
                                redirectUrl = req.path
                                break
                            }
                            res.redirect(redirectUrl)
                          })

                          router.route('/alpha-apply-1e/1e-workplace-adaptations-screener')
                            .post((req, res, next) => {
                              let redirectUrl
                              switch (req.body['workplace-adaptations-screener']) {
                                case 'Yes':
                                  redirectUrl = '/alpha-apply-1e/1e-workplace-adaptations-contacting-your-employer'
                                  break
                                case 'No':
                                  redirectUrl = '/alpha-apply-1e/1e-task-list'
                                  break

                                default:
                                  redirectUrl = req.path
                                  break
                              }
                              res.redirect(redirectUrl)
                            })

                            router.route('/alpha-apply-1e/1e-workplace-adaptations-do-you-know-what-you-need')
                              .post((req, res, next) => {
                                let redirectUrl
                                switch (req.body['workplace-adaptations-do-you-know-what-you-need']) {
                                  case 'Yes, I know what changes should be made':
                                    redirectUrl = '/alpha-apply-1e/1e-workplace-adaptations-details'
                                    break
                                  case 'No, I do not know what changes should be made':
                                    redirectUrl = '/alpha-apply-1e/1e-workplace-adaptations-check-your-answers'
                                    break

                                  default:
                                    redirectUrl = req.path
                                    break
                                }
                                res.redirect(redirectUrl)
                              })

     router.route('/alpha-apply-1e/1e-travel-during-work-screener')
     .post((req, res, next) => {
        let redirectUrl
         switch (req.body['travel-during-work-screener']) {
          case 'Yes':
            redirectUrl = '/alpha-apply-1e/1e-travel-during-work-support-you-may-need'
          break
          case 'No':
            redirectUrl = '/alpha-apply-1e/1e-task-list'
          break

          default:
            redirectUrl = req.path
          break
          }
            res.redirect(redirectUrl)
          })

       router.route('/alpha-apply-1e/1e-mental-health-support-screener')
       .post((req, res, next) => {
          let redirectUrl
           switch (req.body['mental-health-support-screener']) {
            case 'Yes':
              redirectUrl = '/alpha-apply-1e/1e-mental-health-support-check-your-answers'
            break
            case 'No':
              redirectUrl = '/alpha-apply-1e/1e-task-list'
            break

            default:
              redirectUrl = req.path
            break
            }
              res.redirect(redirectUrl)
            })


                 router.route('/alpha-apply-1e/1e-benefits')
                     .post((req, res, next) => {
                         const selections = req.body.benefits;
                          // Stay on same page if not any option selected
                          redirectUrl = '/alpha-apply-1e/1e-ineligible-benefits'
                             console.log(selections + ' length = ' + selections.length)
                               if (selections.length === 1)
                                  {
                                      // Handle single selections
                               if(selections[0].trim() === "Employment Support Allowance") {
                                 redirectUrl = '/alpha-apply-1e/1e-esa'
                                    } else if(selections[0].trim() === 'None of these') {
                                 redirectUrl = '/alpha-apply-1e/1e-you-may-be-eligible-blue'
                                     }
                                     } else {
                                  // Handle Multiple selections
                             redirectUrl = '/alpha-apply-1e/1e-ineligible-benefits'
                                       }
                                     res.redirect(redirectUrl)
                                           })

                 router.route('/alpha-apply-1e/1e-self-employment-do-you-have-a-company-registration-number')
                   .post((req, res, next) => {
                     let redirectUrl
                     switch (req.body['self-employment-do-you-have-a-company-registration-number']) {
                       case 'Yes':
                         redirectUrl = '/alpha-apply-1e/1e-self-employment-company-registration-number'
                         break
                       case 'No':
                         redirectUrl = '/alpha-apply-1e/1e-self-employment-length'
                         break

                       default:
                         redirectUrl = req.path
                         break
                     }
                     res.redirect(redirectUrl)
                   })

                 router.route('/alpha-apply-1e/1e-about-to-start-self-employment-do-you-have-a-utr')
                   .post((req, res, next) => {
                     let redirectUrl
                     switch (req.body['about-to-start-self-employment-do-you-have-a-utr']) {
                       case 'Yes':
                         redirectUrl = '/alpha-apply-1e/1e-about-to-start-self-employment-utr'
                         break
                       case 'No':
                         redirectUrl = '/alpha-apply-1e/1e-about-to-start-self-employment-start-date'
                         break

                       default:
                         redirectUrl = req.path
                         break
                     }
                     res.redirect(redirectUrl)
                   })

                 router.route('/alpha-apply-1e/1e-contacting-you-about-your-application')
                   .post((req, res, next) => {
                     let redirectUrl
                     switch (req.body['contacting-you-about-your-application']) {
                           case 'Me':
                         redirectUrl = '/alpha-apply-1e/1e-contacting-you-phone'
                         break
                       case 'Someone else':
                         redirectUrl = '/alpha-apply-1e/1e-contacting-someone-else'
                         break

                       default:
                         redirectUrl = req.path
                         break
                     }
                     res.redirect(redirectUrl)
                   })



      router.route('/alpha-apply-1f/1f-support-worker-screener')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['support-worker-screener']) {
            case 'Yes':
              redirectUrl = '/alpha-apply-1f/1f-support-worker-do-you-know-what-support-worker-you-need'
              break
            case 'No':
              redirectUrl = '/alpha-apply-1f/1f-task-list'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

       router.route('/alpha-apply-1f/1f-support-worker-do-you-know-what-support-worker-you-need')
         .post((req, res, next) => {
           let redirectUrl
           switch (req.body['support-worker-do-you-know-what-support-worker-you-need']) {
             case 'Yes, I know what I need':
               redirectUrl = '/alpha-apply-1f/1f-support-worker-that-you-need-1'
               break
             case 'No, I do not know what I need':
               redirectUrl = '/alpha-apply-1f/1f-support-worker-short-or-long-term'
               break

             default:
               redirectUrl = req.path
               break
           }
           res.redirect(redirectUrl)
         })

        router.route('/alpha-apply-1f/1f-support-worker-short-or-long-term-two-options')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['support-worker-short-or-long-term-two-options']) {
              case 'No, I need a support worker on a permanent basis':
                redirectUrl = '/alpha-apply-1f/1f-support-worker-how-many-hours-a-week'
                break
              case 'Yes, I need a support worker on a temporary basis':
                redirectUrl = '/alpha-apply-1f/1f-support-worker-how-long-for'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

           router.route('/alpha-apply-1f/1f-support-worker-providing-quotes-for-this-support')
             .post((req, res, next) => {
               let redirectUrl
               switch (req.body['support-worker-providing-quotes-for-this-support']) {
                 case 'Yes, I have quotes':
                   redirectUrl = '/alpha-apply-1f/1f-support-worker-quote-1'
                   break
                 case 'No, I do not have quotes':
                   redirectUrl = '/alpha-apply-1f/1f-support-worker-check-your-answers'
                   break

                 default:
                   redirectUrl = req.path
                   break
               }
               res.redirect(redirectUrl)
             })

               router.route('/alpha-apply-1f/1f-support-worker-hmrc-table-1-quote-1')
                 .post((req, res, next) => {
                   let redirectUrl
                   switch (req.body['support-worker-second-quote-1']) {
                     case 'Yes':
                       redirectUrl = '/alpha-apply-1f/1f-support-worker-quote-2'
                       break
                     case 'No':
                       redirectUrl = '/alpha-apply-1f/1f-support-worker-check-your-answers'
                       break

                     default:
                       redirectUrl = req.path
                       break
                   }
                   res.redirect(redirectUrl)
                 })

               router.route('/alpha-apply-1f/1f-support-worker-hmrc-table-2-quote-1')
                 .post((req, res, next) => {
                   let redirectUrl
                   switch (req.body['support-worker-third-quote-3']) {
                     case 'Yes':
                       redirectUrl = '/alpha-apply-1f/1f-support-worker-quote-3'
                       break
                     case 'No':
                       redirectUrl = '/alpha-apply-1f/1f-support-worker-check-your-answers'
                       break

                     default:
                       redirectUrl = req.path
                       break
                   }
                   res.redirect(redirectUrl)
                 })

router.route('/alpha-apply-1e/1e-support-worker-screener')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['support-worker-screener']) {
      case 'Yes':
        redirectUrl = '/alpha-apply-1e/1e-support-worker-do-you-know-what-support-worker-you-need'
        break
      case 'No':
        redirectUrl = '/alpha-apply-1e/1e-task-list'
        break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })

 router.route('/alpha-apply-1e/1e-support-worker-do-you-know-what-support-worker-you-need')
   .post((req, res, next) => {
     let redirectUrl
     switch (req.body['support-worker-do-you-know-what-support-worker-you-need']) {
       case 'Yes, I know what I need':
         redirectUrl = '/alpha-apply-1e/1e-support-worker-that-you-need-1'
         break
       case 'No, I do not know what I need':
         redirectUrl = '/alpha-apply-1e/1e-support-worker-short-or-long-term'
         break

       default:
         redirectUrl = req.path
         break
     }
     res.redirect(redirectUrl)
   })

  router.route('/alpha-apply-1e/1e-support-worker-short-or-long-term-two-options')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['support-worker-short-or-long-term-two-options']) {
        case 'No, I need a support worker on a permanent basis':
          redirectUrl = '/alpha-apply-1e/1e-support-worker-how-many-hours-a-week'
          break
        case 'Yes, I need a support worker on a temporary basis':
          redirectUrl = '/alpha-apply-1e/1e-support-worker-how-long-for'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })

     router.route('/alpha-apply-1e/1e-support-worker-providing-quotes-for-this-support')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['support-worker-providing-quotes-for-this-support']) {
           case 'Yes, I have quotes':
             redirectUrl = '/alpha-apply-1e/1e-support-worker-quote-1'
             break
           case 'No, I do not have quotes':
             redirectUrl = '/alpha-apply-1e/1e-support-worker-check-your-answers'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })

         router.route('/alpha-apply-1e/1e-support-worker-hmrc-table-1-quote-1')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['support-worker-second-quote-1']) {
               case 'Yes':
                 redirectUrl = '/alpha-apply-1e/1e-support-worker-quote-2'
                 break
               case 'No':
                 redirectUrl = '/alpha-apply-1e/1e-support-worker-check-your-answers'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })

         router.route('/alpha-apply-1e/1e-support-worker-hmrc-table-2-quote-1')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['support-worker-third-quote-3']) {
               case 'Yes':
                 redirectUrl = '/alpha-apply-1e/1e-support-worker-quote-3'
                 break
               case 'No':
                 redirectUrl = '/alpha-apply-1e/1e-support-worker-check-your-answers'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })

//                router.post('/alpha-apply-1f/1f-specialist-equipment-hmrc-table', function (req, res) {
//                  const specialequipment = req.session.data['add-special-equipment']
//                      const one = req.session.data['specialist-equipment-type-1']
//                      const two = req.session.data['specialist-equipment-type-2']
//                      const three = req.session.data['specialist-equipment-type-3']
//
//                      if (specialequipment === 'Yes' && one) {
//                      res.redirect(`/alpha-apply-1f/1f-specialist-equipment-type-of-equipment-2`)
//                    } else if (specialequipment === 'No' && one) {
//                        res.redirect(`/alpha-apply-1f/1f-specialist-equipment-check-your-answers`)
//                    } else if (specialequipment === 'Yes' && two) {
//                        res.redirect(`/alpha-apply-1f/1f-specialist-equipment-type-of-equipment-3`)
//                    } else if (specialequipment === 'No' && two) {
//                        res.redirect(`/alpha-apply-1f/1f-specialist-equipment-check-your-answers`)
//                    } else if (specialequipment === 'Yes' && three) {
//                        res.redirect(`/alpha-apply-1f/1f-specialist-equipment-check-your-answers`)
//                    } else if (specialequipment === 'No' && three) {
//                        res.redirect(`/alpha-apply-1f/1f-specialist-equipment-check-your-answers`)
//                  })


//                router.post('/alpha-apply-1e/1e-specialist-equipment-hmrc-table-answer', function (req, res) {
//                  const specialequipment = req.session.data['add-another-3']
//                      const one = req.session.data['specialist-equipment-type-1']
//                      const two = req.session.data['specialist-equipment-type-2']
//                      const three = req.session.data['specialist-equipment-type-3']
//
//                      if (specialequipment === 'Yes' && one) {
//                      res.redirect(`/alpha-apply-1e/1e-specialist-equipment-type-of-equipment-2`)
//                    } else if (specialequipment === 'supportworker') {
//                        res.redirect(`/alpha-apply-1e/support-worker/check-your-answers`)
//                    } else if (specialequipment === 'traveltowork-ammendment') {
//                      res.redirect(`/alpha-apply-1e/portal-screens/check-your-answers`)
//                    }
//                  })


router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-screener')
.post((req, res, next) => {
   let redirectUrl
    switch (req.body['travelling-to-and-from-work-screener']) {
     case 'Yes':
       redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-do-you-get-to-work-at-the-moment'
     break
     case 'No':
       redirectUrl = '/alpha-apply-1e/1e-task-list'
     break

     default:
       redirectUrl = req.path
     break
     }
       res.redirect(redirectUrl)
     })

                router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-what-support-do-you-need')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['travelling-to-and-from-work-what-support-do-you-need']) {
                      case 'Taxi':
                        redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-would-meet-your-needs-taxi'
                        break
                      case 'Lift in a car from a friend, colleague or family member':
                        redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-would-meet-your-needs-lift'
                        break
                      case 'Something else':
    redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-would-meet-your-needs-something-else'
                        break
                      case 'I am not sure':
  redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-many-journeys-not-sure'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })


                    router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-locations-not-sure')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['travelling-to-and-from-work-locations-not-sure']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-check-your-answers'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-many-miles-not-sure'
                            break
                          case "I'm not sure":
                            redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-check-your-answers'
                            break
                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                      router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-locations-something-else')
                        .post((req, res, next) => {
                          let redirectUrl
                          switch (req.body['travelling-to-and-from-work-locations-something-else']) {
                            case 'Yes':
                              redirectUrl =
                              '/alpha-apply-1e/1e-travelling-to-and-from-work-check-your-answers'
                              break
                            case 'No':
                              redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-many-miles-something-else'
                              break
                            default:
                              redirectUrl = req.path
                              break
                          }
                          res.redirect(redirectUrl)
                        })

                    router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-locations-something-else')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['travelling-to-and-from-work-locations-something-else']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-check-your-answers'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-many-miles-something-else'
                            break
                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                  router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-locations-lift')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['travelling-to-and-from-work-locations-lift']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-check-your-answers'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-many-miles-lift'
                          break
                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

                  router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-locations-taxi')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['travelling-to-and-from-work-locations-taxi']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-providing-quotes-taxi'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-how-many-miles-taxi'
                          break
                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

          router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-providing-quotes-taxi')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['travelling-to-and-from-work-providing-quotes-taxi']) {
                case 'Yes, I have quotes':
                  redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-quote-1'
                  break
                case 'No, I do not have quotes':
                  redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-check-your-answers'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

             router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-hmrc-table-1-quote-1')
               .post((req, res, next) => {
                 let redirectUrl
                 switch (req.body['travelling-to-and-from-work-hmrc-table-1-quote-1']) {
                   case 'Yes':
                     redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-quote-2'
                     break
                   case 'No':
                     redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-check-your-answers'
                     break

                   default:
                     redirectUrl = req.path
                     break
                 }
                 res.redirect(redirectUrl)
               })

              router.route('/alpha-apply-1e/1e-travelling-to-and-from-work-hmrc-table-2-quote-1')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['travelling-to-and-from-work-hmrc-table-2-quote-1']) {
                    case 'Yes':
                      redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-quote-3'
                      break
                    case 'No':
                      redirectUrl = '/alpha-apply-1e/1e-travelling-to-and-from-work-check-your-answers'
                      break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

          router.route('/alpha-apply-1e/1e-specialist-equipment-hmrc-table-1')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['add-special-equipment-1']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-type-of-equipment-2'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-impact-of-not-having-it-1'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })


          router.route('/alpha-apply-1e/1e-specialist-equipment-hmrc-table-2')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['add-special-equipment-2']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-type-of-equipment-3'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-impact-of-not-having-it-2'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

          router.route('/alpha-apply-1e/1e-specialist-equipment-hmrc-table-3')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['add-special-equipment-3']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-impact-of-not-having-it-3'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-impact-of-not-having-it-3'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

          router.route('/alpha-apply-1e/1e-specialist-equipment-screener')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['specialist-equipment-screener']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-do-you-know-what-specialist-equipment-you-need'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1e/1e-task-list'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

           router.route('/alpha-apply-1e/1e-specialist-equipment-do-you-know-what-specialist-equipment-you-need')
             .post((req, res, next) => {
               let redirectUrl
               switch (req.body['specialist-equipment-do-you-know-what-specialist-equipment-you-need']) {
                 case 'Yes, I know what I need':
                   redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-type-of-equipment-1'
                   break
                 case 'No, I do not know what I need':
                   redirectUrl = '/alpha-apply-1e/1e-specialist-equipment-check-your-answers'
                   break

                 default:
                   redirectUrl = req.path
                   break
               }
               res.redirect(redirectUrl)
             })


         router.route('/alpha-apply-1f/1f-specialist-equipment-hmrc-table')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['add-special-equipment']) {
               case 'No':
                 redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-impact-of-not-having-it'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })


        router.route('/alpha-apply-1f/1f-bsl-support')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['1f-bsl-support']) {
              case 'yes':
                redirectUrl = '/alpha-apply-1f/1f-bsl-eligibility-statement'
                break
              case 'no':
                redirectUrl = '/alpha-apply-1f/1f-accessibility-information'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

 router.route('/alpha-apply-1f/1f-do-you-need-support')
   .post((req, res, next) => {
     let redirectUrl
     switch (req.body['do-you-need-support']) {
       case 'yes':
         redirectUrl = '/alpha-apply-1f/1f-accessibility-information'
         break
       case 'no':
         redirectUrl = '/alpha-apply-1f/1f-eligibility-statement'
         break

       default:
         redirectUrl = req.path
         break
     }
     res.redirect(redirectUrl)
   })

router.route('/alpha-apply-1f/1f-bsl-support')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['1f-bsl-support']) {
      case 'yes':
        redirectUrl = '/alpha-apply-1f/#'
        break
      case 'no':
        redirectUrl = '/alpha-apply-1f/1f-accessibility-information'
        break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })


  router.route('/alpha-apply-1f/1f-who-are-you-applying-for')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['1f-who-are-you-applying-for']) {
        case 'myself':
          redirectUrl = '/alpha-apply-1f/1f-eligibility-statement'
          break
        case 'someone else':
          redirectUrl = '/alpha-apply-1f/1f-#'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })

   router.route('/alpha-apply-1f/1f-esa')
     .post((req, res, next) => {
       let redirectUrl
       switch (req.body['1f-esa']) {
         case 'yes':
           redirectUrl = '/alpha-apply-1f/1f-less-than-16-hours'
           break
         case 'yes-but':
           redirectUrl = '/alpha-apply-1f/1f-you-may-be-eligible-blue'
           break
            case 'no':
              redirectUrl = '/alpha-apply-1f/1f-you-may-be-eligible-blue'
              break

         default:
           redirectUrl = req.path
           break
       }
       res.redirect(redirectUrl)
     })

    router.route('/alpha-apply-1f/1f-less-than-16-hours')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['1f-less-than-16-hours']) {
          case 'yes':
            redirectUrl = '/alpha-apply-1f/1f-you-may-be-eligible-blue'
            break
          case 'no':
            redirectUrl = '/alpha-apply-1f/1f-paid-supported-permitted-work'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

    router.route('/alpha-apply-1f/1f-paid-supported-permitted-work')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['paid-supported-permitted-work']) {
          case 'Yes':
            redirectUrl = '/alpha-apply-1f/1f-you-may-be-eligible-blue'
            break
          case 'No':
            redirectUrl = '/alpha-apply-1f/1f-ineligible'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

          router.route('/alpha-apply-1f/1f-nominated-representative')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['1f-nominated-representative']) {
                case 'yes':
                  redirectUrl = '/alpha-apply-1f/1f-nominated-representative-details'
                  break
                case 'no':
                  redirectUrl = '/alpha-apply-1f/1f-contact-preferences'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

            router.route('/alpha-apply-1f/1f-appointee')
              .post((req, res, next) => {
                let redirectUrl
                switch (req.body['1f-appointee']) {
                  case 'yes':
                    redirectUrl = '/alpha-apply-1f/1f-appointee-details'
                    break
                  case 'no':
                    redirectUrl = '/alpha-apply-1f/1f-nominated-representative'
                    break

                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })

              router.route('/alpha-apply-1f/1f-bsl-who-are-you-applying-for')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['1f-bsl-who-are-you-applying-for']) {
                    case 'myself':
                      redirectUrl = '/alpha-apply-1f/1f-bsl-eligibility-statement'
                      break
                    case 'I am an appointee':
                      redirectUrl = '/alpha-apply-1f/#'
                      break
                      case 'I am a representative':
                        redirectUrl = '/alpha-apply-1f/#'
                        break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

                router.route('/alpha-apply-1f/1f-do-you-know-what-support-you-need')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['1f-do-you-know-what-support-you-need']) {
                      case 'yes':
                        redirectUrl = '/alpha-apply-1f/1f-task-list'
                        break
                      case 'no':
                        redirectUrl = '/alpha-apply-1f/#'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })

                  router.route('/alpha-apply-1f/1f-appointee-or-representative')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['appointee-or-representative']) {
                        case 'I have an appointee':
                          redirectUrl = '/alpha-apply-1f/1f-appointee-details'
                          break
                        case 'I want to nominate a representative':
                          redirectUrl = '/alpha-apply-1f/1f-nominated-representative-details'
                          break
                          case 'I do not have an appointee or nominated representative':
                            redirectUrl = '/alpha-apply-1f/1f-contact-preferences'
                            break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })


                   router.route('/alpha-apply-1f/1f-do-you-need-support-at-work')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['do-you-need-support-at-work']) {
                         case 'yes':
                           redirectUrl = '/alpha-apply-1f/1f-what-support-you-need'
                           break
                         case 'no':
                           redirectUrl = '/alpha-apply-1f/1f-type-of-travel-support'
                           break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })

  router.route('/alpha-apply-1f/1f-another-health-condition-or-disability-2')
  .post((req, res, next) => {
  let redirectUrl
  switch (req.body['1f-another-health-condition-or-disability-2']) {
  case 'Yes':
  redirectUrl = '/alpha-apply-1f/1f-about-health-condition-or-disability-2'
  break
  case 'No':
  redirectUrl = '/alpha-apply-1f/1f-about-your-health-condition-or-disability-check-your-answers-2'
  break

  default:
  redirectUrl = req.path
  break
  }
  res.redirect(redirectUrl)
  })


    router.route('/alpha-apply-1f/1f-another-health-condition-or-disability-3')
    .post((req, res, next) => {
    let redirectUrl
    switch (req.body['1f-another-health-condition-or-disability-3']) {
    case 'Yes':
    redirectUrl = '/alpha-apply-1f/#'
    break
    case 'No':
    redirectUrl = '/alpha-apply-1f/1f-about-your-health-condition-or-disability-check-your-answers-3'
    break

    default:
    redirectUrl = req.path
    break
    }
    res.redirect(redirectUrl)
    })


                   router.route('/alpha-apply-1f/1f-employment-status')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['1f-employment-status']) {
                         case 'Employed':
                           redirectUrl = '/alpha-apply-1f/1f-employment-job-title'
                           break
                         case 'Self-employed':
                           redirectUrl = '/alpha-apply-1f/1f-self-employment-job-title'
                           break
                             case 'About to start employment':
                               redirectUrl = '/alpha-apply-1f/1f-about-to-start-employment-job-title'
                               break
                             case 'About to start self-employment':
                               redirectUrl = '/alpha-apply-1f/1f-about-to-start-self-employment-job-title'
                               break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })


                   router.route('/alpha-apply-1f/1f-employment-full-time')
                     .post((req, res, next) => {
                       let redirectUrl
                       switch (req.body['employment-full-time']) {
                         case 'Yes':
                           redirectUrl = '/alpha-apply-1f/1f-employment-employer-name'
                           break
                         case 'No':
                           redirectUrl = '/alpha-apply-1f/1f-employment-hours-per-week'
                           break

                         default:
                           redirectUrl = req.path
                           break
                       }
                       res.redirect(redirectUrl)
                     })

                    router.route('/alpha-apply-1f/1f-self-employment-full-time')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['self-employment-full-time']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1f/1f-self-employment-workplace-address'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1f/1f-self-employment-hours-per-week'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


                    router.route('/alpha-apply-1f/1f-about-to-start-employment-full-time')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['employment-full-time']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1f/1f-about-to-start-employment-employer-name'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1f/1f-about-to-start-employment-hours-per-week'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                     router.route('/alpha-apply-1f/1f-about-to-start-self-employment-full-time')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['self-employment-full-time']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1f/1f-about-to-start-self-employment-workplace-address'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1f/1f-about-to-start-self-employment-hours-per-week'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })


                  router.route('/alpha-apply-1f/1f-contact-someone-else')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['1f-contact-someone-else']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1f/1f-someone-else-details'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1f/1f-your-details-check-your-answers'
                          break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

  router.route('/alpha-apply-1f/1f-who-are-you-applying-for')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['1f-who-are-you-applying-for']) {
        case 'myself':
          redirectUrl = '/alpha-apply-1f/1f-eligibility-statement'
          break
        case 'I am an appointee':
          redirectUrl = '/alpha-apply-1f/1f-#'
          break
          case 'I am an appointee':
            redirectUrl = '/alpha-apply-1f/1f-#'
            break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })


                  router.route('/alpha-apply-1f/1f-your-health-condition-or-disability-1')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['add-another-1']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1f/1f-your-health-condition-or-disability-2'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1f/1f-your-health-condition-or-disability-affects-your-work-1'
                          break

                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

                    router.route('/alpha-apply-1f/1f-your-health-condition-or-disability-hrmc-table-2')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['add-another-2']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1f/1f-your-health-condition-or-disability-3'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1f/1f-your-health-condition-or-disability-affects-your-work-2'
                            break

                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


                     router.route('/alpha-apply-1f/1f-extra-information-screener')
                       .post((req, res, next) => {
                         let redirectUrl
                         switch (req.body['extra-information-screener']) {
                           case 'Yes':
                             redirectUrl = '/alpha-apply-1f/1f-extra-information-textbox'
                             break
                           case 'No':
                             redirectUrl = '/alpha-apply-1f/1f-task-list'
                             break

                           default:
                             redirectUrl = req.path
                             break
                         }
                         res.redirect(redirectUrl)
                       })

                       router.route('/alpha-apply-1f/1f-changes-to-your-vehicle-screener')
                         .post((req, res, next) => {
                           let redirectUrl
                           switch (req.body['changes-to-your-vehicle-screener']) {
                             case 'Yes':
                               redirectUrl = '/alpha-apply-1f/1f-changes-to-your-vehicle-vehicle-type'
                               break
                             case 'No':
                               redirectUrl = '/alpha-apply-1f/1f-task-list'
                               break

                             default:
                               redirectUrl = req.path
                               break
                           }
                           res.redirect(redirectUrl)
                         })

                         router.route('/alpha-apply-1f/1f-workplace-adaptations-screener')
                           .post((req, res, next) => {
                             let redirectUrl
                             switch (req.body['workplace-adaptations-screener']) {
                               case 'Yes':
                                 redirectUrl = '/alpha-apply-1f/1f-workplace-adaptations-contacting-your-employer'
                                 break
                               case 'No':
                                 redirectUrl = '/alpha-apply-1f/1f-task-list'
                                 break

                               default:
                                 redirectUrl = req.path
                                 break
                             }
                             res.redirect(redirectUrl)
                           })

                           router.route('/alpha-apply-1f/1f-workplace-adaptations-do-you-know-what-you-need')
                             .post((req, res, next) => {
                               let redirectUrl
                               switch (req.body['workplace-adaptations-do-you-know-what-you-need']) {
                                 case 'Yes, I know what changes should be made':
                                   redirectUrl = '/alpha-apply-1f/1f-workplace-adaptations-details'
                                   break
                                 case 'No, I do not know what changes should be made':
                                   redirectUrl = '/alpha-apply-1f/1f-workplace-adaptations-check-your-answers'
                                   break

                                 default:
                                   redirectUrl = req.path
                                   break
                               }
                               res.redirect(redirectUrl)
                             })

    router.route('/alpha-apply-1f/1f-travel-during-work-screener')
    .post((req, res, next) => {
       let redirectUrl
        switch (req.body['travel-during-work-screener']) {
         case 'Yes':
           redirectUrl = '/alpha-apply-1f/1f-travel-during-work-support-you-may-need'
         break
         case 'No':
           redirectUrl = '/alpha-apply-1f/1f-task-list'
         break

         default:
           redirectUrl = req.path
         break
         }
           res.redirect(redirectUrl)
         })

      router.route('/alpha-apply-1f/1f-mental-health-support-screener')
      .post((req, res, next) => {
         let redirectUrl
          switch (req.body['mental-health-support-screener']) {
           case 'Yes':
             redirectUrl = '/alpha-apply-1f/1f-mental-health-support-check-your-answers'
           break
           case 'No':
             redirectUrl = '/alpha-apply-1f/1f-task-list'
           break

           default:
             redirectUrl = req.path
           break
           }
             res.redirect(redirectUrl)
           })


                router.route('/alpha-apply-1f/1f-benefits')
                    .post((req, res, next) => {
                        const selections = req.body.benefits;
                         // Stay on same page if not any option selected
                         redirectUrl = '/alpha-apply-1f/1f-ineligible-benefits'
                            console.log(selections + ' length = ' + selections.length)
                              if (selections.length === 1)
                                 {
                                     // Handle single selections
                              if(selections[0].trim() === "Employment Support Allowance") {
                                redirectUrl = '/alpha-apply-1f/1f-less-than-16-hours'
                                   } else if(selections[0].trim() === 'None of these') {
                                redirectUrl = '/alpha-apply-1f/1f-you-may-be-eligible-blue'
                                    }
                                    } else {
                                 // Handle Multiple selections
                            redirectUrl = '/alpha-apply-1f/1f-ineligible-benefits'
                                      }
                                    res.redirect(redirectUrl)
                                          })

                router.route('/alpha-apply-1f/1f-self-employment-do-you-have-a-company-registration-number')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['self-employment-do-you-have-a-company-registration-number']) {
                      case 'Yes':
                        redirectUrl = '/alpha-apply-1f/1f-self-employment-company-registration-number'
                        break
                      case 'No':
                        redirectUrl = '/alpha-apply-1f/1f-self-employment-length'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })

                router.route('/alpha-apply-1f/1f-about-to-start-self-employment-do-you-have-a-utr')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['about-to-start-self-employment-do-you-have-a-utr']) {
                      case 'Yes':
                        redirectUrl = '/alpha-apply-1f/1f-about-to-start-self-employment-utr'
                        break
                      case 'No':
                        redirectUrl = '/alpha-apply-1f/1f-about-to-start-self-employment-start-date'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })

                router.route('/alpha-apply-1f/1f-contacting-you-about-your-application')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['contacting-you-about-your-application']) {
                          case 'Me':
                        redirectUrl = '/alpha-apply-1f/1f-contacting-you-phone'
                        break
                      case 'Someone else':
                        redirectUrl = '/alpha-apply-1f/1f-contacting-someone-else'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })



router.route('/alpha-apply-1f/1f-support-worker-screener')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['support-worker-screener']) {
      case 'Yes':
        redirectUrl = '/alpha-apply-1f/1f-support-worker-do-you-know-what-support-worker-you-need'
        break
      case 'No':
        redirectUrl = '/alpha-apply-1f/1f-task-list'
        break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })

 router.route('/alpha-apply-1f/1f-support-worker-do-you-know-what-support-worker-you-need')
   .post((req, res, next) => {
     let redirectUrl
     switch (req.body['support-worker-do-you-know-what-support-worker-you-need']) {
       case 'Yes, I know what I need':
         redirectUrl = '/alpha-apply-1f/1f-support-worker-that-you-need-1'
         break
       case 'No, I do not know what I need':
         redirectUrl = '/alpha-apply-1f/1f-support-worker-short-or-long-term'
         break

       default:
         redirectUrl = req.path
         break
     }
     res.redirect(redirectUrl)
   })

  router.route('/alpha-apply-1f/1f-support-worker-short-or-long-term-two-options')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['support-worker-short-or-long-term-two-options']) {
        case 'No, I need a support worker on a permanent basis':
          redirectUrl = '/alpha-apply-1f/1f-support-worker-how-many-hours-a-week'
          break
        case 'Yes, I need a support worker on a temporary basis':
          redirectUrl = '/alpha-apply-1f/1f-support-worker-how-long-for'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })

     router.route('/alpha-apply-1f/1f-support-worker-providing-quotes-for-this-support')
       .post((req, res, next) => {
         let redirectUrl
         switch (req.body['support-worker-providing-quotes-for-this-support']) {
           case 'Yes, I have quotes':
             redirectUrl = '/alpha-apply-1f/1f-support-worker-quote-1'
             break
           case 'No, I do not have quotes':
             redirectUrl = '/alpha-apply-1f/1f-support-worker-check-your-answers'
             break

           default:
             redirectUrl = req.path
             break
         }
         res.redirect(redirectUrl)
       })

         router.route('/alpha-apply-1f/1f-support-worker-hmrc-table-1-quote-1')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['support-worker-second-quote-1']) {
               case 'Yes':
                 redirectUrl = '/alpha-apply-1f/1f-support-worker-quote-2'
                 break
               case 'No':
                 redirectUrl = '/alpha-apply-1f/1f-support-worker-check-your-answers'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })

         router.route('/alpha-apply-1f/1f-support-worker-hmrc-table-2-quote-1')
           .post((req, res, next) => {
             let redirectUrl
             switch (req.body['support-worker-third-quote-3']) {
               case 'Yes':
                 redirectUrl = '/alpha-apply-1f/1f-support-worker-quote-3'
                 break
               case 'No':
                 redirectUrl = '/alpha-apply-1f/1f-support-worker-check-your-answers'
                 break

               default:
                 redirectUrl = req.path
                 break
             }
             res.redirect(redirectUrl)
           })


router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-screener')
.post((req, res, next) => {
   let redirectUrl
    switch (req.body['travelling-to-and-from-work-screener']) {
     case 'Yes':
       redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-do-you-get-to-work-at-the-moment'
     break
     case 'No':
       redirectUrl = '/alpha-apply-1f/1f-task-list'
     break

     default:
       redirectUrl = req.path
     break
     }
       res.redirect(redirectUrl)
     })

                router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-what-support-do-you-need')
                  .post((req, res, next) => {
                    let redirectUrl
                    switch (req.body['travelling-to-and-from-work-what-support-do-you-need']) {
                      case 'Taxi':
                        redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-would-meet-your-needs-taxi'
                        break
                      case 'Lift in a car from a friend, colleague or family member':
                        redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-would-meet-your-needs-lift'
                        break
                      case 'Something else':
    redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-would-meet-your-needs-something-else'
                        break
                      case 'I am not sure':
  redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-many-journeys-not-sure'
                        break

                      default:
                        redirectUrl = req.path
                        break
                    }
                    res.redirect(redirectUrl)
                  })


                    router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-locations-not-sure')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['travelling-to-and-from-work-locations-not-sure']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-many-miles-not-sure'
                            break
                          case "I'm not sure":
                            redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                            break
                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                      router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-locations-something-else')
                        .post((req, res, next) => {
                          let redirectUrl
                          switch (req.body['travelling-to-and-from-work-locations-something-else']) {
                            case 'Yes':
                              redirectUrl =
                              '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                              break
                            case 'No':
                              redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-many-miles-something-else'
                              break
                            default:
                              redirectUrl = req.path
                              break
                          }
                          res.redirect(redirectUrl)
                        })

                    router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-locations-something-else')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['travelling-to-and-from-work-locations-something-else']) {
                          case 'Yes':
                            redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                            break
                          case 'No':
                            redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-many-miles-something-else'
                            break
                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })

                  router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-locations-lift')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['travelling-to-and-from-work-locations-lift']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-how-many-miles-lift'
                          break
                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

                  router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-locations-taxi')
                    .post((req, res, next) => {
                      let redirectUrl
                      switch (req.body['travelling-to-and-from-work-locations-taxi']) {
                        case 'Yes':
                          redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-providing-quotes-taxi'
                          break
                        case 'No':
                          redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                          break
                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

          router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-providing-quotes-taxi')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['travelling-to-and-from-work-providing-quotes-taxi']) {
                case 'Yes, I have quotes':
                  redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-quote-1'
                  break
                case 'No, I do not have quotes':
                  redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

             router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-hmrc-table-1-quote-1')
               .post((req, res, next) => {
                 let redirectUrl
                 switch (req.body['travelling-to-and-from-work-hmrc-table-1-quote-1']) {
                   case 'Yes':
                     redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-quote-2'
                     break
                   case 'No':
                     redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                     break

                   default:
                     redirectUrl = req.path
                     break
                 }
                 res.redirect(redirectUrl)
               })

              router.route('/alpha-apply-1f/1f-travelling-to-and-from-work-hmrc-table-2-quote-1')
                .post((req, res, next) => {
                  let redirectUrl
                  switch (req.body['travelling-to-and-from-work-hmrc-table-2-quote-1']) {
                    case 'Yes':
                      redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-quote-3'
                      break
                    case 'No':
                      redirectUrl = '/alpha-apply-1f/1f-travelling-to-and-from-work-check-your-answers'
                      break

                    default:
                      redirectUrl = req.path
                      break
                  }
                  res.redirect(redirectUrl)
                })

          router.route('/alpha-apply-1f/1f-specialist-equipment-hmrc-table-1')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['add-special-equipment-1']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-type-of-equipment-2'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-impact-of-not-having-it-1'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })


          router.route('/alpha-apply-1f/1f-specialist-equipment-hmrc-table-2')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['add-special-equipment-2']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-type-of-equipment-3'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-impact-of-not-having-it-2'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

          router.route('/alpha-apply-1f/1f-specialist-equipment-hmrc-table-3')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['add-special-equipment-3']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-impact-of-not-having-it-3'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-impact-of-not-having-it-3'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

          router.route('/alpha-apply-1f/1f-specialist-equipment-screener')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['specialist-equipment-screener']) {
                case 'Yes':
                  redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-do-you-know-what-specialist-equipment-you-need'
                  break
                case 'No':
                  redirectUrl = '/alpha-apply-1f/1f-task-list'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })

           router.route('/alpha-apply-1f/1f-specialist-equipment-do-you-know-what-specialist-equipment-you-need')
             .post((req, res, next) => {
               let redirectUrl
               switch (req.body['specialist-equipment-do-you-know-what-specialist-equipment-you-need']) {
                 case 'Yes, I know what I need':
                   redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-type-of-equipment-1'
                   break
                 case 'No, I do not know what I need':
                   redirectUrl = '/alpha-apply-1f/1f-specialist-equipment-check-your-answers'
                   break

                 default:
                   redirectUrl = req.path
                   break
               }
               res.redirect(redirectUrl)
             })
