import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("login");
  this.route("signup");
  this.route("index", { path: '/' });
  this.route('question', { path: '/questions/:id' });
  this.route('create', { path: '/ask-a-question' });
  this.route('edit', { path: '/question/:id/edit' });
});

export default Router;
