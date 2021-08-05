# Jr. TA Onboarding

This onboarding tool is meant for you to learn more about the nuts and bolts of being a Junior Teaching Assistant.

You have been introduced to App Academy by HR and you have learned the philosophy and many of the rules of a/A.

## **Make Sure You Have Access**

1. [Confluence][confluence]
2. [Progress Tracker][progress-tracker]
3. [a/A Open][app-academy-open]
4. [Slack][slack]
5. [Zoom][zoom] (make sure you have a license so that you can have Host functionality)
6. [App Academy Starters][aa-starters]
7. [Modular Curriculum Github][modular-curriculum-github]
8. [Namely][namely]
9. [Instructor Dashboard][instructor-dashboard]
10. Cohort Tracking Sheet (ask the current Cohort Instructor)
11. [Discourse][discourse]
12. [Instructor Guide][instructor-guide]

## Division of Responsibilities

Refer to the [Division of Responsibilities][division-responsibilities] to know your role and the role of your other co-workers.

## Preparation for your Cohort

Here are some suggestions when preparing for your specific module

### Meet With The Current Module Instructor

Meet with your module instructor to find out the daily nuances of the module as well as what your immediate and future expectations will be.

### Learn the Material

The first thing you are going to want to do is familiarize yourself with your module's material. The best place to do this is through using App Academy Open. If you have not been given access please request it from your Senior Manager. Here you will be able to study the Readings, Videos, and Projects that you will be included when teaching your Module.

Another proper option for learning the written material is through using the [Modular Curriculum][modular-curriculum]

If there are recorded sessions of your Module's Lectures, this may also help you to get a feel for how your module's lecture is currently administered.

### Shadow a Jr. TA or Senior Instructor

You will shadow one or more Jr. TA's for a few days or until the Module Instructor and you feel that you are ready to take questions alone.

### Lecture

During lecture you will be responsible for answering questions via the Online Question Slack Channel that coordinates with your module.

#### Answering Questions in Slack

Be Mindful of your tone and response when answering a question in Slack. Check documentation for accuracy when necessary. If you can find an MDN supporting document it is also often worth posting over handing the student the explanation.

**Reminder**
Remember to follow the debugging structure which you can reference in the [Instructor's Guide][debugging] as well as the [Anatomy of Answering Questions][anatomy-of-answering-questions].

### Answering Questions During Pair Programming

You are responsible for answering student questions via the Progress Tracker Tool.

#### Answering A Question from Progress Tracker

1. Navigate to [Progress Tracker][progress-tracker].
2. Choose the `Questions` Link in the left sidebar. This should display the student breakout rooms for the cohort. A square for a question will be green, yellow, or red depending on time that has passed since the button was clicked
3. Hover over the Square for the question you want to answer. When you hover, a bar should slide from the right with a `Take` label. The name(s) of the student(s) should also be displayed.
4. Click that label. Your [Avatar][gravatar], if you have one will show next to the square. This lets your teammates know you have taken the question.
5. Next on Zoom, navigate to the Breakout room for the student(s) and answer their question(s).
6. After you have completed the question(s), return to the Progress Tracker and hover over the question square with your avatar. A sidebar with `Close` should be displayed.
7. Choose `Close` to close out your question.

#### Debugging

Refer to the suggestions from the [Instructor's Guide][debugging] in terms of debugging.

## Answering Questions During An Assessment

There are restricted answers to questions during an assessment. Please follow the protocol for [Answering Questions During An Assessment][assessment-questions]
You should remind all involved internally of this document and procedure before the start of an Assessment.

### Scoring An Assessment

You may be asked to help score an assessment.
Navigate to [Progress Tracker][progress-tracker] -> Assessments -> Scores
You should see a column representing the current weeks assessment on the left.

The `fetch` option that you see at the top is meant to be used only by the Cohort Assistant unless otherwise advised. This will fetch all of the current scores.

After scores have been fetched. You can navigate to each student's scores by pressing `Score` next to their name. If the autograder is working properly, you will see scores based on what has been completed.
(Create instructions for PT score and fetching and grader sheet, manual grading)

Scores are often manually recorded by the team in a separate document created by the Cohort Assistant. Ask the Cohort Assistant for access to this document.

### Manual Grading

In the event that the AutoGrader is not working, you may be required to help manually grade the assessment. (find out how to do this)

### If A Student Needs More Time

Sometimes students are allowed more time due to pre-existing conditions or disabilities. This is usually pre-arranged with HR. The CA should have a list of these students and notify you.

If a student requests more time, consult with the Cohort Assistant to arrange for it. If there is no Cohort Assistant inform your Module Instructor and they will reach out to the Senior Instructional Manager to receive permission to give extra time.

If a student is having machine issues that cannot be repaired quickly, note how
much time passes between the machine failure and repair and return that time to
the student for the Assessment. Also, in order to avoid student panic, let the
student know sooner rather than later that the time will be returned to them.
This will give them the same opportunity as all other students to complete the
assessment.

### Correcting Mistakes in Curriculum

In order to correct mistakes that are on App Academy Open, please follow the instructions given in the [X-Curriculum-Flow][x-curriculum-guideline] guide. Refer to the `How to Contribute to Modular-Curriculum` section to understand how to use a proper git workflow on [Modular Curriculum][modular-curriculum] and create a Pull Request.

In order to expedite changes and meet the two week requirement for changes to be released on App Academy Open, make any corrections to curriculum and create your Pull Request ASAP.

After you have made a pull request, go to the `instruction_x_curriculum` channel
on Slack and mention that you have made a PR, include your Module Number along
with a short description and the PR link.

### Reviews

Be sure to check the [Instructor Dashboard][instructor-dashboard] regularly. This will allow you to see how you are being received by the students when you help them. It will also allow you to continually adjust and improve your approach to students and debugging as you continue in the Module.

### Instructor Feedback Average Script

```js
totalScoreSum = 0;
limit = undefined; // change to a number to limit to a number of pages (x20 for scores)
determineCurrentPageAverage = () => {
  const pageScores = [
    ...document.querySelectorAll(
      '.MuiTypography-root.MuiTypography-h4.MuiTypography-colorTextPrimary'
    )
  ].map((ele) => parseInt(ele.innerHTML));
  totalScoreSum += pageScores.length;
  return pageScores.reduce((a, b) => a + b) / pageScores.length;
};
runningSum = determineCurrentPageAverage();
paginations = [...document.querySelector('.MuiPagination-ul').children];
paginationCount = limit
  ? limit
  : parseInt(paginations[paginations.length - 2].innerText);
for (i = 1; i < paginationCount; i++) {
  paginations = [...document.querySelector('.MuiPagination-ul').children];
  let page;
  if (i < 6) {
    page = paginations[i].children[0];
  } else {
    if (paginationCount - 2 <= i) {
      console.log('last two!');
      page = paginations[6 + i - (paginationCount - 2)].children[0];
    } else {
      page = paginations[5].children[0];
    }
  }
  page.click();
  runningSum += determineCurrentPageAverage();
}
console.log(
  'Your average score is:',
  runningSum / paginationCount,
  'across',
  totalScoreSum,
  'scores'
);
```

[Main Page][main-page]

[instructor-guide]: https://docs.google.com/document/d/155tlfvARPjUxMY5ay9GZcr0soJ6R1RSdORh6tMIQbdQ/edit
[modular-curriculum]: https://github.com/appacademy/Modular-Curriculum/tree/staging/content
[app-academy-open]: https://open.appacademy.io/
[navigate-to-zoom-room]: https://github.com/jdrichardsappacad/AppAcademy-Online-Onboarding-Instruction-Guide/blob/master/Resources/ModuleZoomRoom.md
[instructional-guide]: https://appacademy.github.io/instruction-guide/learning/
[division-responsibilities]: https://github.com/jdrichardsappacad/AppAcademy-Online-Onboarding-Instruction-Guide/blob/master/resources/division-of-responsibilities.md
[gravatar]: https://en.gravatar.com/
[x-curriculum-guideline]: https://github.com/appacademy/curriculum-developer-guide/wiki/Instruction-x-Curriculum-Workflow
[modular-curriculum]: https://github.com/appacademy/Modular-Curriculum/
[assessment-checker]: https://github.com/appacademy/assessment_checker
[online-stopwatch]: https://www.google.com/search?q=stopwatch&oq=stopwatch&aqs=chrome..69i57.3448j0j1&sourceid=chrome&ie=UTF-8
[release-curriculum]: https://appacademyio.atlassian.net/wiki/spaces/CUR/pages/534675541/App+Academy+Online+-+How+to+Enroll+People+in+Courses
[assessment-questions]: https://github.com/jdrichardsappacad/AppAcademy-Online-Onboarding-Instruction-Guide/blob/master/resources/handling-assessment-questions.md
[discourse]: https://discourse.appacademy.io/
[confluence]: https://appacademyio.atlassian.net/wiki/spaces/IN/overview
[progress-tracker]: https://progress.appacademy.io/
[slack]: https://slack.com/
[zoom]: https://zoom.us/
[vimeo]: https://vimeo.com/
[aa-starters]: https://github.com/appacademy-starters
[instructor-dashboard]: https://instructor-dashboard.herokuapp.com/
[modular-curriculum-github]: https://github.com/appacademy/Modular-Curriculum
[namely]: https://appacademy.namely.com/users/login
[instructor-dashboard]: https://instructor-dashboard.herokuapp.com/
[instructor-guide]: https://docs.google.com/document/d/155tlfvARPjUxMY5ay9GZcr0soJ6R1RSdORh6tMIQbdQ/edit
[confluence]: https://appacademyio.atlassian.net/wiki/spaces/IN/overview
[lecture-tips]: https://github.com/jdrichardsappacad/AppAcademy-Online-Onboarding-Instruction-Guide/blob/master/resources/LectureTips.md
[debugging]: https://docs.google.com/document/d/155tlfvARPjUxMY5ay9GZcr0soJ6R1RSdORh6tMIQbdQ/edit#heading=h.yf44acf1qaiy
[anatomy-of-answering-questions]: https://docs.google.com/document/d/155tlfvARPjUxMY5ay9GZcr0soJ6R1RSdORh6tMIQbdQ/edit#heading=h.tu721xd89uwd
[main-page]: https://github.com/jdrichardsappacad/AppAcademy-Online-Onboarding-Instruction-Guide
