class MultipleChoice extends Question {
  // mỗi loại câu hỏi sẽ có cách render UI khác nhau
  renderAnswer() {
    return this.answers.reduce((result, answer, index) => {
      return (
        result +
        `
            <div class="col-6">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="multi${this.id}-mulAnswer${answer.id}"
                name="multi-${this.id}"
                class="custom-control-input"
                value="${answer.content}"
              />
              <label
                class="custom-control-label"
                for="multi${this.id}-mulAnswer${answer.id}"
              >
                ${answer.content}
              </label>
            </div>
          </div>
            `
      );
    }, "");
  }

  // mỗi loại câu hỏi sẽ có cách tính khác nhau
  checkQuestion() {
    // lấy danh sách đáp ná của câu hỏi multiple choice
    // answerEls danh sách các radios
    const answerEls = document.querySelectorAll(
      `input[name="multi${this.id}"]`
    );

    //duyệt danh sách đáp án để lấy ra đáp án được chọn
    const userAnswer = [...answerEls].reduce((result, item) => {
      if (item.checked) {
        return item.value;
      }
      return result;
    }, "");

    // tìm đáp án đúng trong danh sách đáp án
    const { content: correctAnswer } = this.answer.find((item) => item.exact);

    return userAnswer === correctAnswer;
  }
}
