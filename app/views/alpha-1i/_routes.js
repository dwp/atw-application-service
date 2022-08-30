const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.all('/equipment-adaptations-and-software/quote/another-quote-answer', function(req, res, next){
const itemTotal = req.session.data['cost-per-item'];
if (itemTotal < 500.0) {
   res.redirect('/alpha-1i/equipment-adaptations-and-software/summary-1');
} else if (itemTotal >= 500.0) {
   res.redirect('/alpha-1i/equipment-adaptations-and-software/quote/another-quote');
}

next();

});
router.all('/equipment-adaptations-and-software/quote/another-quote-answer-2', function(req, res, next){
const itemTotal = req.session.data['cost-per-item-2'];
if (itemTotal < 500.0) {
   res.redirect('/alpha-1i/equipment-adaptations-and-software/summary-1');
} else if (itemTotal >= 500.0) {
   res.redirect('/alpha-1i/equipment-adaptations-and-software/quote/another-quote-2');
}

next();

});
router.all('/equipment-adaptations-and-software/quote/another-quote-answer-2-1', function(req, res, next){
const itemTotal = req.session.data['cost-per-item-2-2'];
if (itemTotal < 500.0) {
   res.redirect('/alpha-1i/equipment-adaptations-and-software/summary-2');
} else if (itemTotal >= 500.0) {
   res.redirect('/alpha-1i/equipment-adaptations-and-software/quote/another-quote-2-1');
}

next();

});
router.all('/equipment-adaptations-and-software/quote/another-quote-answer-3', function(req, res, next){
const itemTotal = req.session.data['cost-per-item-3'];
if (itemTotal < 500.0) {
   res.redirect('/alpha-1i/equipment-adaptations-and-software/summary-1');
} else if (itemTotal >= 500.0) {
   res.redirect('/alpha-1i/equipment-adaptations-and-software/quote/another-quote-3');
}

next();

});

        router.route('/eligibility/ogd/index-answer')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['civil-servant']) {
              case 'yes':
                redirectUrl = '/alpha-1i/eligibility/ogd/support-other-jobs'
                break
              case 'no':
                redirectUrl = '/alpha-1i/eligibility/you-may-be-eligible'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })


          router.route('/eligibility/ogd/support-other-answer')
            .post((req, res, next) => {
              let redirectUrl
              switch (req.body['civil-servant-other']) {
                case 'yes':
                  redirectUrl = '/alpha-1i/eligibility/ogd/using-this-service'
                  break
                case 'no':
                  redirectUrl = '/alpha-1i/eligibility/ogd/get-support'
                  break

                default:
                  redirectUrl = req.path
                  break
              }
              res.redirect(redirectUrl)
            })


router.route('/your-job-and-employer/employment-status')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['1i-employment-status']) {
      case 'Employed':
        redirectUrl = '/alpha-1i/your-job-and-employer/employment/job-title'
        break
      case 'Self-employed':
        redirectUrl = '/alpha-1i/your-job-and-employer/self-employed/job-title'
        break
          case 'About to start employment':
            redirectUrl = '/alpha-1i/your-job-and-employer/about-to-start-employment/job-title'
            break
          case 'About to start self-employment':
            redirectUrl = '/alpha-1i/your-job-and-employer/about-to-start-self-employment/job-title'
            break

      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })

router.route('/your-job-and-employer/about-to-start-self-employment/do-you-have-a-utr-answer')
.post((req, res, next) => {
 let redirectUrl
 switch (req.body['about-to-start-self-employment-do-you-have-a-utr']) {
   case 'Yes':
     redirectUrl = '/alpha-1i/your-job-and-employer/about-to-start-self-employment/utr'
     break
   case 'No':
     redirectUrl = '/alpha-1i/your-job-and-employer/about-to-start-self-employment/start-date'
     break

   default:
     redirectUrl = req.path
     break
 }
 res.redirect(redirectUrl)
})

router.route('/how-we-contact-you/contacting-you-about-your-application')
.post((req, res, next) => {
 let redirectUrl
 switch (req.body['contacting-you-about-your-application']) {
       case 'Me':
     redirectUrl = '/alpha-1i/how-we-contact-you/confirm-phone'
     break
   case 'Someone else':
     redirectUrl = '/alpha-1i/how-we-contact-you/someone-else'
     break

   default:
     redirectUrl = req.path
     break
 }
 res.redirect(redirectUrl)
})

router.route('/mental-health-support/screener')
.post((req, res, next) => {
let redirectUrl
switch (req.body['mental-health-support-screener']) {
case 'Yes':
redirectUrl = '/alpha-1i/mental-health-support/check-your-answers'
break
case 'No':
redirectUrl = '/alpha-1i/task-list'
break
case 'I do not know':
redirectUrl = '/alpha-1i/task-list'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

    router.route('/changes-to-your-vehicle/screener')
      .post((req, res, next) => {
        let redirectUrl
        switch (req.body['changes-to-your-vehicle-screener']) {
          case 'Yes':
            redirectUrl = '/alpha-1i/changes-to-your-vehicle/vehicle-type'
            break
          case 'No':
            redirectUrl = '/alpha-1i/task-list'
            break
            case 'I do not know':
            redirectUrl = '/alpha-1i/task-list'
            break

          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

router.route('/changes-to-your-vehicle/vehicle-type')
.post((req, res, next) => {
let redirectUrl
switch (req.body['changes-to-your-vehicle-ownership']) {
case 'Me':
  redirectUrl = '/alpha-1i/changes-to-your-vehicle/requested-change'
  break
case 'Someone else, like a family member':
  redirectUrl = '/alpha-1i/changes-to-your-vehicle/someone-else'
  break
case 'This is a lease or company vehicle':
  redirectUrl = '/alpha-1i/changes-to-your-vehicle/someone-else'
  break

default:
  redirectUrl = req.path
  break
}
res.redirect(redirectUrl)
})

      router.route('/changes-to-your-workplace/screener')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['workplace-adaptations-screener']) {
            case 'Yes':
              redirectUrl = '/alpha-1i/changes-to-your-workplace/contacting-your-employer'
              break
            case 'No':
              redirectUrl = '/alpha-1i/task-list'
              break
              case 'I do not know':
              redirectUrl = '/alpha-1i/task-list'
              break

            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

        router.route('/changes-to-your-workplace/do-you-know-what-you-need')
          .post((req, res, next) => {
            let redirectUrl
            switch (req.body['workplace-adaptations-do-you-know-what-you-need']) {
              case 'Yes, I know what changes should be made':
                redirectUrl = '/alpha-1i/changes-to-your-workplace/details'
                break
              case 'No, I do not know what changes should be made':
                redirectUrl = '/alpha-1i/changes-to-your-workplace/check-your-answers'
                break

              default:
                redirectUrl = req.path
                break
            }
            res.redirect(redirectUrl)
          })

  router.route('/anything-else-you-would-like-to-tell-us/screener')
    .post((req, res, next) => {
      let redirectUrl
      switch (req.body['extra-information-screener']) {
        case 'Yes':
          redirectUrl = '/alpha-1i/anything-else-you-would-like-to-tell-us/additional-information'
          break
        case 'No':
          redirectUrl = '/alpha-1i/task-list'
          break
          case 'I do not know':
          redirectUrl = '/alpha-1i/task-list'
          break

        default:
          redirectUrl = req.path
          break
      }
      res.redirect(redirectUrl)
    })

router.route('/equality-information/ethnic-group')
.post((req, res, next) => {
let redirectUrl
switch (req.body['ethnicity']) {
  case 'white':
    redirectUrl = '/alpha-1i/equality-information/ethnic-group-white'
    break
  case 'multiple':
    redirectUrl = '/alpha-1i/equality-information/ethnic-group-multiple'
    break
  case 'asian':
    redirectUrl = '/alpha-1i/equality-information/ethnic-group-asian'
    break
  case 'black':
    redirectUrl = '/alpha-1i/equality-information/ethnic-group-black'
    break
  case 'other':
    redirectUrl = '/alpha-1i/equality-information/ethnic-group-other'
    break
  case 'skip':
    redirectUrl = '/alpha-1i/equality-information/equality-sex-and-gender'
    break

  default:
    redirectUrl = req.path
    break
}
res.redirect(redirectUrl)
})

router.route('/equality-information/do-you-want-to-answer')
.post((req, res, next) => {
let redirectUrl
switch (req.body['equalities-info']) {
  case 'Yes, answer the equality questions (takes 2 minutes)':
    redirectUrl = '/alpha-1i/equality-information/ethnic-group'
    break
  case 'No, skip the equality questions':
    redirectUrl = '/alpha-1i/confirmation'
    break

  default:
    redirectUrl = req.path
    break
}
res.redirect(redirectUrl)
})

router.route('/do-you-need-support')
.post((req, res, next) => {
let redirectUrl
switch (req.body['do-you-need-support']) {
case 'yes':
redirectUrl = '/alpha-1i/accessibility-information'
break
case 'no':
redirectUrl = '/alpha-1i/eligibility/check-youre-eligible'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/eligibility/are-you-a-civil-servant')
.post((req, res, next) => {
let redirectUrl
switch (req.body['civil-servant']) {
  case 'yes':
    redirectUrl = '/alpha-1i/eligibility/ineligible-civil-servant'
    break
  case 'no':
    redirectUrl = '/alpha-1i/eligibility/what-benefits-are-you-receiving'
    break
  case 'not sure':
    redirectUrl = '/alpha-1i/eligibility/ineligible-civil-servant'
    break

  default:
    redirectUrl = req.path
    break
}
res.redirect(redirectUrl)
})

router.route('/eligibility/what-benefits-are-you-receiving')
 .post((req, res, next) => {
     const selections = req.body.benefits;
      // Stay on same page if not any option selected
      redirectUrl = '/alpha-1i/eligibility/ineligible-benefits'
         console.log(selections + ' length = ' + selections.length)
           if (selections.length === 1)
              {
                  // Handle single selections
           if(selections[0].trim() === "Employment Support Allowance") {
             redirectUrl = '/alpha-1i/eligibility/do-you-work-less-than-16-hours'
                } else if(selections[0].trim() === 'None of these') {
             redirectUrl = '/alpha-1i/eligibility/ogd'
                 }
                 } else {
              // Handle Multiple selections
         redirectUrl = '/alpha-1i/eligibility/ineligible-benefits'
                   }
                 res.redirect(redirectUrl)
                       })

router.route('/eligibility/do-you-work-less-than-16-hours')
.post((req, res, next) => {
let redirectUrl
switch (req.body['1i-less-than-16-hours']) {
case 'yes':
redirectUrl = '/alpha-1i/eligibility/you-may-be-eligible'
break
case 'no':
redirectUrl = '/alpha-1i/eligibility/paid-supported-permitted-work'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/eligibility/paid-supported-permitted-work')
.post((req, res, next) => {
let redirectUrl
switch (req.body['paid-supported-permitted-work']) {
case 'Yes':
redirectUrl = '/alpha-1i/eligibility/you-may-be-eligible'
break
case 'No':
redirectUrl = '/alpha-1i/eligibility/ineligible-employment-support-allowance'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/your-conditions-and-disabilities/1')
 .post((req, res, next) => {
   let redirectUrl
   switch (req.body['add-another-1']) {
     case 'Yes':
       redirectUrl = '/alpha-1i/your-conditions-and-disabilities/2'
       break
     case 'No':
       redirectUrl = '/alpha-1i/your-conditions-and-disabilities/how-does-it-affect-you-at-work-1'
       break

     default:
       redirectUrl = req.path
       break
   }
   res.redirect(redirectUrl)
 })


 router.route('/your-conditions-and-disabilities/summary-2-answer')
   .post((req, res, next) => {
     let redirectUrl
     switch (req.body['add-another-2']) {
       case 'Yes':
         redirectUrl = '/alpha-1i/your-conditions-and-disabilities/3'
         break
       case 'No':
         redirectUrl = '/alpha-1i/your-conditions-and-disabilities/how-does-it-affect-you-at-work-2'
         break

       default:
         redirectUrl = req.path
         break
     }
     res.redirect(redirectUrl)
   })

router.route('/equipment-adaptations-and-software/screener')
.post((req, res, next) => {
let redirectUrl
switch (req.body['specialist-equipment-screener']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/do-you-know-what-you-need'
break
case 'No':
redirectUrl = '/alpha-1i/task-list'
break
case 'I do not know':
redirectUrl = '/alpha-1i/task-list'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/equipment-adaptations-and-software/do-you-know-what-you-need')
.post((req, res, next) => {
let redirectUrl
switch (req.body['specialist-equipment-do-you-know-what-specialist-equipment-you-need']) {
case 'Yes, I know what I need':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/type-of-equipment-1'
break
case 'No, I do not know what I need':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/guidance'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/equipment-adaptations-and-software/summary')
.post((req, res, next) => {
let redirectUrl
switch (req.body['add-special-equipment-1']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/type-of-equipment-2'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/impact-of-not-having-it-1'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/equipment-adaptations-and-software/summary-2')
.post((req, res, next) => {
let redirectUrl
switch (req.body['add-special-equipment-2']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/type-of-equipment-3'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/impact-of-not-having-it-2'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/equipment-adaptations-and-software/summary-3')
.post((req, res, next) => {
let redirectUrl
switch (req.body['add-special-equipment-3']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/impact-of-not-having-it-3'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/impact-of-not-having-it-3'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/equipment-adaptations-and-software/quote-answer')
.post((req, res, next) => {
let redirectUrl
switch (req.body['sea-quote-1']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/quote/add-quote-1'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/summary-1'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})
router.route('/equipment-adaptations-and-software/another-quote-answer')
.post((req, res, next) => {
let redirectUrl
switch (req.body['another-sea-quote-1']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/quote/add-quote-1-2'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/summary-1'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})
router.route('/equipment-adaptations-and-software/quote-answer-1-2')
.post((req, res, next) => {
let redirectUrl
switch (req.body['another-sea-quote-2']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/quote/add-quote-1-3'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/summary-1'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/equipment-adaptations-and-software/quote-answer-2-2')
.post((req, res, next) => {
let redirectUrl
switch (req.body['another-sea-quote-2']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/quote/add-quote-2-3'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/summary-2'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})
router.route('/equipment-adaptations-and-software/quote-answer-2')
.post((req, res, next) => {
let redirectUrl
switch (req.body['another-sea-quote-2']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/quote/add-quote-2'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/summary-2'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})
router.route('/equipment-adaptations-and-software/quote-answer-2')
.post((req, res, next) => {
let redirectUrl
switch (req.body['sea-quote-2']) {
case 'Yes':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/quote/add-quote-2'
break
case 'No':
redirectUrl = '/alpha-1i/equipment-adaptations-and-software/summary-2'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/support-workers/screener')
.post((req, res, next) => {
let redirectUrl
switch (req.body['support-worker-screener']) {
case 'Yes':
redirectUrl = '/alpha-1i/support-workers/do-you-know-what-support-worker-you-need'
break
case 'No':
redirectUrl = '/alpha-1i/task-list'
break
case 'I do not know':
redirectUrl = '/alpha-1i/task-list'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/support-workers/do-you-know-what-support-worker-you-need')
.post((req, res, next) => {
let redirectUrl
switch (req.body['support-worker-do-you-know-what-support-worker-you-need']) {
case 'Yes, I know what I need':
redirectUrl = '/alpha-1i/support-workers/type-of-support-worker-that-you-need'
break
case 'No, I do not know what I need':
redirectUrl = '/alpha-1i/support-workers/temporary-basis'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/support-workers/temporary-basis-1')
.post((req, res, next) => {
let redirectUrl
switch (req.body['support-worker-short-or-long-term-two-options']) {
case 'No, I need a support worker on a permanent basis':
redirectUrl = '/alpha-1i/support-workers/how-many-hours-a-week'
break
case 'Yes, I need a support worker on a temporary basis':
redirectUrl = '/alpha-1i/support-workers/how-long-for'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/support-workers/providing-quotes-for-this-support')
.post((req, res, next) => {
let redirectUrl
switch (req.body['support-worker-providing-quotes-for-this-support']) {
case 'Yes, I have quotes':
redirectUrl = '/alpha-1i/support-workers/first-quote'
break
case 'No, I do not have quotes':
redirectUrl = '/alpha-1i/support-workers/do-you-need-another-support-worker'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/support-workers/first-quote-summary')
.post((req, res, next) => {
let redirectUrl
switch (req.body['support-worker-second-quote-1']) {
case 'Yes':
redirectUrl = '/alpha-1i/support-workers/second-quote'
break
case 'No':
redirectUrl = '/alpha-1i/support-workers/do-you-need-another-support-worker'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/support-workers/second-quote-summary')
.post((req, res, next) => {
let redirectUrl
switch (req.body['support-worker-third-quote-3']) {
case 'Yes':
redirectUrl = '/alpha-1i/support-workers/third-quote'
break
case 'No':
redirectUrl = '/alpha-1i/support-workers/do-you-need-another-support-worker'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/travelling-to-and-from-work/screener')
.post((req, res, next) => {
let redirectUrl
switch (req.body['travelling-to-and-from-work-screener']) {
case 'Yes':
redirectUrl = '/alpha-1i/travelling-to-and-from-work/how-do-you-get-to-work-at-the-moment'
break
case 'No':
redirectUrl = '/alpha-1i/task-list'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.post('/travelling-to-and-from-work/how-do-you-get-to-work-at-the-moment', function(req, res, next){
if (req.session.data['travelling-to-and-from-work-how-do-you-get-to-work-at-the-moment']){
for (i = 0; i<req.session.data['travelling-to-and-from-work-how-do-you-get-to-work-at-the-moment'].length; i++){
switch (req.session.data['travelling-to-and-from-work-how-do-you-get-to-work-at-the-moment'][i]){
case "Public transport" :  return res.redirect("/alpha-1i/travelling-to-and-from-work/public-transport"); next(); break;
case "Drive or lift in a car" :  return res.redirect("/alpha-1i/travelling-to-and-from-work/what-support-do-you-need"); next(); break;
case "Walking or cycling" :  return res.redirect("/alpha-1i/travelling-to-and-from-work/what-support-do-you-need"); next(); break;
case "Taxi" :  return res.redirect("/alpha-1i/travelling-to-and-from-work/what-support-do-you-need"); next(); break;
case "I work from home" :  return res.redirect("/alpha-1i/travelling-to-and-from-work/what-support-do-you-need"); next(); break;
case "Other" :  return res.redirect("/alpha-1i/travelling-to-and-from-work/what-support-do-you-need"); next(); break;
case "I have not started work yet" :  return res.redirect("/alpha-1i/travelling-to-and-from-work/what-support-do-you-need"); next(); break;

default: continue;
}
break;
}
} else {
}
return res.redirect("/alpha-1i/travelling-to-and-from-work/how-do-you-get-to-work-at-the-moment"); next();
})


router.route('/travelling-to-and-from-work/what-support-do-you-need')
.post((req, res, next) => {
 let redirectUrl
 switch (req.body['travelling-to-and-from-work-what-support-do-you-need']) {
   case 'Taxi':
     redirectUrl = '/alpha-1i/travelling-to-and-from-work/taxi/work-how-would-it-meet-your-needs'
     break
   case 'Lift in a car from a friend, colleague or family member':
     redirectUrl = '/alpha-1i/travelling-to-and-from-work/lift/work-how-would-it-meet-your-needs'
     break
   case 'Something else':
redirectUrl = '/alpha-1i/travelling-to-and-from-work/something-else/work-how-would-it-meet-your-needs'
     break
   case 'I am not sure':
redirectUrl = '/alpha-1i/travelling-to-and-from-work/not-sure/how-many-journeys'
     break

   default:
     redirectUrl = req.path
     break
 }
 res.redirect(redirectUrl)
})

router.route('/travelling-to-and-from-work/taxi/providing-quotes')
.post((req, res, next) => {
let redirectUrl
switch (req.body['travelling-to-and-from-work-providing-quotes-taxi']) {
case 'Yes, I have quotes':
redirectUrl = '/alpha-1i/travelling-to-and-from-work/taxi/first-quote'
break
case 'No, I do not have quotes':
redirectUrl = '/alpha-1i/travelling-to-and-from-work/check-your-answers'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})

router.route('/travelling-to-and-from-work/taxi/first-quote-summary')
.post((req, res, next) => {
let redirectUrl
switch (req.body['travelling-to-and-from-work-hmrc-table-1-quote-1']) {
case 'Yes':
  redirectUrl = '/alpha-1i/travelling-to-and-from-work/taxi/second-quote'
  break
case 'No':
  redirectUrl = '/alpha-1i/travelling-to-and-from-work/check-your-answers'
  break

default:
  redirectUrl = req.path
  break
}
res.redirect(redirectUrl)
})

router.route('/travelling-to-and-from-work/taxi/second-quote-summary')
.post((req, res, next) => {
let redirectUrl
switch (req.body['travelling-to-and-from-work-hmrc-table-2-quote-1']) {
 case 'Yes':
   redirectUrl = '/alpha-1i/travelling-to-and-from-work/taxi/third-quote'
   break
 case 'No':
   redirectUrl = '/alpha-1i/travelling-to-and-from-work/check-your-answers'
   break

 default:
   redirectUrl = req.path
   break
}
res.redirect(redirectUrl)
})

router.route('/travelling-during-work/screener')
.post((req, res, next) => {
let redirectUrl
switch (req.body['travel-during-work-screener']) {
case 'Yes':
redirectUrl = '/alpha-1i/travelling-during-work/support-you-may-need'
break
case 'No':
redirectUrl = '/alpha-1i/task-list'
break
case 'I do not know':
redirectUrl = '/alpha-1i/task-list'
break

default:
redirectUrl = req.path
break
}
res.redirect(redirectUrl)
})
module.exports = router;
