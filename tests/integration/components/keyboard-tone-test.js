import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('keyboard-tone', 'Integration | Component | keyboard tone', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{keyboard-tone}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#keyboard-tone}}
      template block text
    {{/keyboard-tone}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
