import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'matt-deploy-ember/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
});
