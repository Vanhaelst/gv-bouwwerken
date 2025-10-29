import { PaperClipIcon } from "@heroicons/react/20/solid";

import clsx from "clsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text/text.component";

const Item = ({ title, description }) => {
  if (!description) return;
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-medium text-gray-900 ">{title}</dt>
      <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 ">
        {description}
      </dd>
    </div>
  );
};
export const Fishe = ({ title, fishe }) => {
  if (process.env.NEXT_PUBLIC_SITE === "gvInvest") {
    return (
      <section id="fishe" className="bg-gray-50 py-8 md:py-16">
        <Container className="grid md:grid-cols-12">
          <div
            className={clsx(
              "flex flex-col justify-center pb-10 md:pb-20",
              "md:col-span-10 md:col-start-2",
            )}
          >
            <div>
              <div className="px-4 sm:px-0 mb-4">
                <Text as="h2" level="2xl">
                  Technische fiche
                </Text>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 ">
                  Alle technische informatie over {title}
                </p>
              </div>

              {fishe?.accordion.length ? (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue=""
                >
                  {fishe?.accordion.map(({ id, title, items }) => (
                    <AccordionItem value={id} key={id}>
                      <AccordionTrigger>
                        <Text as="h2" level="xl">
                          {title}
                        </Text>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="mb-6 border-t border-gray-100 ">
                          <dl className="divide-y divide-gray-100 ">
                            {items.map(({ id, title, description }) => (
                              <Item
                                key={id}
                                title={title}
                                description={description}
                              />
                            ))}
                          </dl>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}

                  {fishe.attachments.length ? (
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        <Text as="h2" level="xl">
                          Bijlages
                        </Text>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="mt-6 border-t border-gray-100 ">
                          <dl className="divide-y divide-gray-100 ">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm/6 font-medium text-gray-900 ">
                                Attachments
                              </dt>
                              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 ">
                                <ul
                                  role="list"
                                  className="divide-y divide-gray-100 rounded-md border border-gray-200  "
                                >
                                  {fishe.attachments.map(
                                    ({ id, url, size, filename }) => (
                                      <li
                                        key={id}
                                        className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6"
                                      >
                                        <div className="flex w-0 flex-1 items-center">
                                          <PaperClipIcon
                                            aria-hidden="true"
                                            className="size-5 shrink-0 text-gray-400 "
                                          />
                                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium text-gray-900 ">
                                              {filename}
                                            </span>
                                            <span className="shrink-0 text-gray-400 ">
                                              {size > 1000000
                                                ? `${(size / 100000).toFixed(2)}mb`
                                                : `${(size / 1000).toFixed(2)}kb`}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="ml-4 shrink-0">
                                          <a
                                            target="_blank"
                                            href={url}
                                            className="font-medium text-primary-600 hover:text-primary-500  "
                                          >
                                            Download
                                          </a>
                                        </div>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : null}
                </Accordion>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    );
  }
  return null;
};
