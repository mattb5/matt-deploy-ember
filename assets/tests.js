define('matt-deploy-ember/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/application/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/serializer.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('matt-deploy-ember/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'matt-deploy-ember/tests/helpers/start-app', 'matt-deploy-ember/tests/helpers/destroy-app'], function (exports, _qunit, _mattDeployEmberTestsHelpersStartApp, _mattDeployEmberTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _mattDeployEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _mattDeployEmberTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('matt-deploy-ember/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/helpers/resolver', ['exports', 'matt-deploy-ember/resolver', 'matt-deploy-ember/config/environment'], function (exports, _mattDeployEmberResolver, _mattDeployEmberConfigEnvironment) {

  var resolver = _mattDeployEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _mattDeployEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mattDeployEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('matt-deploy-ember/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/helpers/start-app', ['exports', 'ember', 'matt-deploy-ember/app', 'matt-deploy-ember/config/environment'], function (exports, _ember, _mattDeployEmberApp, _mattDeployEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _mattDeployEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _mattDeployEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('matt-deploy-ember/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/test-helper', ['exports', 'matt-deploy-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _mattDeployEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_mattDeployEmberTestsHelpersResolver['default']);
});
define('matt-deploy-ember/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('matt-deploy-ember/tests/unit/application/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application/adapter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define('matt-deploy-ember/tests/unit/application/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('matt-deploy-ember/tests/unit/application/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/serializer-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('matt-deploy-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map