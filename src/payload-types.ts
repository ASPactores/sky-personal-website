/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    logo: Logo;
    pages: Page;
    technologies: Technology;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    logo: LogoSelect<false> | LogoSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    technologies: TechnologiesSelect<false> | TechnologiesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    links: Link;
  };
  globalsSelect: {
    links: LinksSelect<false> | LinksSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  'First Name': string;
  'Last Name': string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "logo".
 */
export interface Logo {
  id: number;
  name: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  'page-name'?: string | null;
  layout?:
    | (
        | {
            title: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'rich-text';
          }
        | {
            Components?:
              | {
                  component: (
                    | {
                        title: {
                          root: {
                            type: string;
                            children: {
                              type: string;
                              version: number;
                              [k: string]: unknown;
                            }[];
                            direction: ('ltr' | 'rtl') | null;
                            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                            indent: number;
                            version: number;
                          };
                          [k: string]: unknown;
                        };
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'rich-text';
                      }
                    | {
                        type?: ('image' | 'logo') | null;
                        photo?: (number | null) | Media;
                        logo?: (number | null) | Logo;
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'photo';
                      }
                    | {
                        items: (number | Technology)[];
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'technologies-list';
                      }
                    | {
                        'project-name': string;
                        description: {
                          root: {
                            type: string;
                            children: {
                              type: string;
                              version: number;
                              [k: string]: unknown;
                            }[];
                            direction: ('ltr' | 'rtl') | null;
                            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                            indent: number;
                            version: number;
                          };
                          [k: string]: unknown;
                        };
                        image?: (number | null) | Media;
                        technologies?: (number | Technology)[] | null;
                        'github-link'?: string | null;
                        'preview-link'?: string | null;
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'project-detail';
                      }
                  )[];
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'section';
          }
        | {
            items: (number | Technology)[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'technologies-list';
          }
        | {
            type?: ('image' | 'logo') | null;
            photo?: (number | null) | Media;
            logo?: (number | null) | Logo;
            id?: string | null;
            blockName?: string | null;
            blockType: 'photo';
          }
        | {
            'project-name': string;
            description: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            image?: (number | null) | Media;
            technologies?: (number | Technology)[] | null;
            'github-link'?: string | null;
            'preview-link'?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'project-detail';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "technologies".
 */
export interface Technology {
  id: number;
  name: string;
  logo: number | Logo;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'logo';
        value: number | Logo;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'technologies';
        value: number | Technology;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  'First Name'?: T;
  'Last Name'?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "logo_select".
 */
export interface LogoSelect<T extends boolean = true> {
  name?: T;
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  'page-name'?: T;
  layout?:
    | T
    | {
        'rich-text'?:
          | T
          | {
              title?: T;
              id?: T;
              blockName?: T;
            };
        section?:
          | T
          | {
              Components?:
                | T
                | {
                    component?:
                      | T
                      | {
                          'rich-text'?:
                            | T
                            | {
                                title?: T;
                                id?: T;
                                blockName?: T;
                              };
                          photo?:
                            | T
                            | {
                                type?: T;
                                photo?: T;
                                logo?: T;
                                id?: T;
                                blockName?: T;
                              };
                          'technologies-list'?:
                            | T
                            | {
                                items?: T;
                                id?: T;
                                blockName?: T;
                              };
                          'project-detail'?:
                            | T
                            | {
                                'project-name'?: T;
                                description?: T;
                                image?: T;
                                technologies?: T;
                                'github-link'?: T;
                                'preview-link'?: T;
                                id?: T;
                                blockName?: T;
                              };
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'technologies-list'?:
          | T
          | {
              items?: T;
              id?: T;
              blockName?: T;
            };
        photo?:
          | T
          | {
              type?: T;
              photo?: T;
              logo?: T;
              id?: T;
              blockName?: T;
            };
        'project-detail'?:
          | T
          | {
              'project-name'?: T;
              description?: T;
              image?: T;
              technologies?: T;
              'github-link'?: T;
              'preview-link'?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "technologies_select".
 */
export interface TechnologiesSelect<T extends boolean = true> {
  name?: T;
  logo?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "links".
 */
export interface Link {
  id: number;
  link?:
    | {
        title: string;
        url: string;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "links_select".
 */
export interface LinksSelect<T extends boolean = true> {
  link?:
    | T
    | {
        title?: T;
        url?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}