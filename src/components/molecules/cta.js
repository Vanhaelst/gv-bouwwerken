import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";
import { Button } from "@/components/atoms/button";

export default function CallToAction({ title, subtitle, buttons }) {
  return (
    <div className="bg-primary-500">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-14 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div>
          <Text
            as="h2"
            level="3xl"
            classnames={clsx("text-white font-semibold")}
          >
            {title}
          </Text>
          <Text
            as="h2"
            level="xl"
            classnames={clsx("text-white font-semibold")}
          >
            {subtitle}
          </Text>
        </div>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          {buttons.length ? (
            <div className="space-x-3 mt-4">
              {buttons.map((button) => (
                <Button key={button.id} {...button}>
                  {button.cta}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
