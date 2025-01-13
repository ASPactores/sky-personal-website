import { PagesSelect } from './payload-types'

export type LinkType = {
  id?: string | null | undefined
  title: string
  url: string
}

type ComponentsType<T extends boolean = true> = NonNullable<
  NonNullable<NonNullable<PagesSelect<T>['layout']>['section']>['Components']
>

type ComponentItemsType<T extends boolean = true> = NonNullable<ComponentsType<T>['component']>
