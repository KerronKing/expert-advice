import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createAnswer(model, event) {
      event.preventDefault();

      let question = this.store.peekRecord('question', model.id);
      let answer = this.store.createRecord('answer', {
        body: this.body,
        question
      });

      answer.save().then(() => {
        console.log(model)
        this.transitionToRoute('index');
      });
    }
  }
})
