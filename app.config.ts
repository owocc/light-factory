export default defineAppConfig({
  ui: {
    primary: 'orange',
    table: {
      divide: 'divide-gray-200 dark:divide-gray-600',
      tbody: "divide-y divide-gray-200 dark:divide-gray-700",
      thead: 'dark:bg-gray-700',
    },
    slideover: {
      background: 'bg-transparent dark:bg-transparent',
      overlay: {
        background: 'dark:bg-gray-900/75'
      }
    },
    input: {
      color: {
        white: {
          outline: 'shadow-none dark:bg-gray-700 dark:ring-gray-600'
        },
      }
    },
    modal: {
      background: 'dark:bg-gray-700',
      overlay: {
        background: 'dark:bg-gray-900/75'
      }
    },
    card: {
      background: 'dark:bg-gray-800',
    },
    button: {
      color: {
        white: {
          solid: 'dark:bg-gray-800 dark:hover:bg-gray-700',
        },
        gray: {
          ghost: 'dark:hover:bg-gray-700'
        }
      }
    },
    checkbox: {
      background: 'dark:bg-gray-800'
    },
    select: {
      color: {
        white: {
          outline: 'dark:bg-gray-800'
        }
      }
    },
    formGroup: {
      container: 'mt-2'
    }
  }
})
