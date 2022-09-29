let questions = [];

init();

function init() {
  // call API lấy danh sách câu hỏi
  getQuestions()
    .then((response) => {
      console.log("data từ API:", response.data);
      questions = generateQuestion(response.data);
      console.log("data sau khi map:", questions);
      // hiển thị danh sách câu hỏi ra giao diện
      displayQuestion(questions);
    })
    .catch((error) => {
      console.log(error);
    });
}

// duyệt qua danh sách câu hỏi từ API , kiểm tra loại hỏi đề tạo object đúng với kiểu câu hỏi
function generateQuestion(questions) {
  return questions.map((question) => {
    const { id, questionType, content, answers } = question;
    switch (questionType) {
      case 1:
        return new MultipleChoice(id, questionType, content, answers);
      case 2:
        return new filllnBlank(id, questionType, content, answers);
      default:
        break;
    }
  });
}


function displayQuestion(questions) {
    const { length } = questions;

  const html = questions.reduce((result, question, index) => {
    // nextItem :dùng đê đi tới câu hỏi tiếp theo
    const nextItem = questions[index + 1];

    const btn =
      index < length - 1
        ? `<a href="#quiz-${nextItem.id}" class="quiz__btn quiz__next">NEXT</a>`
        : `<a href="#quizResult" class="quiz__btn quiz__next" onclick="submit()">SUBMIT</a>`;

    return (
      result +
      `
       <div class="quizSection" id="quiz-${question.id}">
       <div class="quiz__main">
         <div class="quiz__header">
           <p>${question.content}</p>
         </div>
         <div class="quiz__body row">${question.renderAnswer()}</div>
         <div class="quiz__footer">
           <p class="quiz__current">Question ${index + 1} of ${length}</p>
            ${btn}
           </div>
       </div>
     </div>
       `
    );
  }, "");

  document.getElementById("quizList").innerHTML = html;
}


function submit() {
    let count = 0; // số câu đúng
    question.forEach(question => {
        const isCorrect = question.checkQuestion();
        if (isCorrect) {
            count++;
        }
    });

    document.getElementById("correct").innerHTML = count;
    document.getElementById("incorrect").innerHTML = questions.length - count;
}