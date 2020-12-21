import ApplicationAdapter from './application';
import ENV from "../config/environment";

export default class QuestionAdapter extends ApplicationAdapter {
  namespace = ENV.apiNamespace;
}
