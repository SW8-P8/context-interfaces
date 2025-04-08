export const contextValues = ['baseline', 'text', 'triggerWarning', 'drawing'] as const

export type ContextInterface = (typeof contextValues)[number]
