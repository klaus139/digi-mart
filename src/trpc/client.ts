import {createTRPCReact, createTRPCProxyClient} from '@trpc/react-query'
import { AppRouter } from './'
export const trpc = createTRPCReact<AppRouter>({})