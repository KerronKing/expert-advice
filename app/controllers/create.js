import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createQuestion(event) {
      event.preventDefault();

      let question = this.store.createRecord('question', {
        title: this.title,
        description: this.description
      })

      question.save().then(() => {
        this.transitionToRoute('index');
      })
    }
  }
});