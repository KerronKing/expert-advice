import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editQuestion(event) {
      event.preventDefault();

      let question = this.model;
      question.save().then(() => {
        this.transitionToRoute('index');
      })
    }
  }
})
