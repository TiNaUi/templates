// 扩展mock
declare module 'mockjs' {
    /** 所有已注册的mock规则  */
    const _mocked: Record<string, any>
}

// 这个导出一个东西也可以，或者上面引入vue
export {}
