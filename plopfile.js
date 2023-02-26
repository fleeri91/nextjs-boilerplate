module.exports = (plop) => {
  /** Constants */
  const COMPONENT_FOLDER = 'src/components';
  const PAGE_FOLDER = 'src/pages';
  const LAYOUT_FOLDER = 'src/layouts';
  const HOOK_FOLDER = 'src/hooks';

  /**
   * Component generator
   */
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Which type of component would you like to create?',
        choices: ['Atom', 'Molecule', 'Organism'],
      },
      {
        type: 'input',
        name: 'name',
        message: "What's the name of your component?",
      },
    ],
    actions: (data) => {
      let actions = [];

      if (data.type === 'Atom') {
        folder = `${COMPONENT_FOLDER}/{{lowerCase type}}s`;
      } else if (data.type === 'Molecule') {
        folder = `${COMPONENT_FOLDER}/{{lowerCase type}}s`;
      } else if (data.type === 'Organism') {
        folder = `${COMPONENT_FOLDER}/{{lowerCase type}}s`;
      }

      actions.push({
        type: 'add',
        path: `${folder}/{{properCase name}}/{{properCase name}}.tsx`,
        templateFile: 'plop-templates/component.hbs',
      });
      actions.push({
        type: 'add',
        path: `${folder}/{{properCase name}}/{{properCase name}}.test.tsx`,
        templateFile: 'plop-templates/test.hbs',
      });
      actions.push({
        type: 'add',
        path: `${folder}/{{properCase name}}/index.ts`,
        templateFile: 'plop-templates/index.hbs',
      });
      actions.push({
        type: 'add',
        path: `${folder}/{{properCase name}}/{{properCase name}}.stories.tsx`,
        templateFile: 'plop-templates/stories.hbs',
      });
      actions.push('--> Your new component was created!');
      return actions;
    },
  });

  /**
   * Page generator
   */
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of your page?",
      },
    ],
    actions: () => {
      let actions = [];
      actions.push({
        type: 'add',
        path: `${PAGE_FOLDER}/{{name}}/{{properCase name}}.tsx`,
        templateFile: 'plop-templates/page.hbs',
      });
      actions.push({
        type: 'add',
        path: `${PAGE_FOLDER}/{{name}}/index.ts`,
        templateFile: 'plop-templates/index.hbs',
      });
      actions.push(
        '--> Your new page was created!'
      );
      return actions;
    },
  });

  /**
   * Layout generator
   */
  plop.setGenerator('layout', {
    description: 'Create a layout',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of your layout?",
      },
    ],
    actions: () => {
      let actions = [];
      actions.push({
        type: 'add',
        path: `${LAYOUT_FOLDER}/{{properCase name}}/{{properCase name}}.tsx`,
        templateFile: 'plop-templates/layout.hbs',
      });
      actions.push({
        type: 'add',
        path: `${LAYOUT_FOLDER}/{{properCase name}}/index.ts`,
        templateFile: 'plop-templates/index.hbs',
      });
      actions.push('--> Your new layout was created!');
      return actions;
    },
  });

  /**
   * Hook generator
   */
  plop.setGenerator('hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of your hook?",
      },
    ],
    actions: () => {
      let actions = [];
      actions.push({
        type: 'add',
        path: `${HOOK_FOLDER}/{{camelCase name}}.ts`,
        templateFile: 'plop-templates/hook.hbs',
      });
      actions.push({
        type: 'append',
        path: `${HOOK_FOLDER}/index.ts`,
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{camelCase name}} } from './{{camelCase name}}';`,
      });
      actions.push({
        type: 'append',
        path: `${HOOK_FOLDER}/index.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      });
      actions.push(
        '--> Your new hook was created and added to the hooks-index!'
      );
      return actions;
    },
  });
};
