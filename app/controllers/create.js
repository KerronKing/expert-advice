import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createQuestion(event) {
      event.preventDefault();

      let tags = this.tags.split(',');

      let question = this.store.createRecord('question', {
        title: this.title,
        description: this.description,
        tags
      })

      question.save().then(() => {
        this.transitionToRoute('index');
      })
    }
  }
});