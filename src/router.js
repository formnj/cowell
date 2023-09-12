const routes = [
    {
        path: '/cowell',
        component: () => import("@/views/pc/pc_wrap"),
        name: 'pc',
        children: [
            {
                path: '/cowell',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_08_01_01"),
            },
        ]
    }
]
 
export default routes;