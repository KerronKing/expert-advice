import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Test question title ${i}`;
  },
  description() {
    return 'Test description';
  },
  tags() {
    return ['energy', 'weather', 'news'];
  }
});
