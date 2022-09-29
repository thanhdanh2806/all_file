class filllnBlank extends Question {
  // mỗi loại câu hỏi sẽ có cách render UI khác nhau
  renderAnswer() {
    // bó tách phần tử thứ 0 trong array answers
    const [answer] = this.answers;

    return `<div class="col-12">
        <textarea
          class="form-control"
          id="fill${this.id}-fillAnswer${answer.id}"
          rows="3"
        ></textarea>
      </div>
      `;
  }

  //duyệt danh sách đáp án để lấy ra đáp án được chọn
  checkQuestion() {
    const [answer] = this.answers;
    const answerEls = document.getElementById(`fill${this.id}-fillAnswer${answer.id}`)
    
    return answerEls.value === answer.content;
}
}
