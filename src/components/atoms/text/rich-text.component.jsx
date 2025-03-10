import React from "react";
import Link from "next/link";
import parse, { attributesToProps, domToReact } from "html-react-parser";
import { Text } from "./text.component";

const RichText = ({ text, classnames, level }) => {
  const options = {
    replace({ attribs, children, name }) {
      if (name === "h1") {
        const props = attributesToProps(attribs);
        return (
          <Text {...props} level="h1" classnames={classnames}>
            {domToReact(children, options)}
          </Text>
        );
      }
      if (name === "h2") {
        const props = attributesToProps(attribs);
        return (
          <Text {...props} level="h2" classnames={classnames}>
            {domToReact(children, options)}
          </Text>
        );
      }
      if (name === "h3") {
        const props = attributesToProps(attribs);
        return (
          <Text {...props} level="h3" classnames={classnames}>
            {domToReact(children, options)}
          </Text>
        );
      }
      if (name === "h4") {
        const props = attributesToProps(attribs);
        return (
          <Text {...props} level="h4" classnames={classnames}>
            {domToReact(children, options)}
          </Text>
        );
      }
      if (name === "h5") {
        const props = attributesToProps(attribs);
        return (
          <Text {...props} level="h5" classnames={classnames}>
            {domToReact(children, options)}
          </Text>
        );
      }
      if (name === "h6") {
        const props = attributesToProps(attribs);
        return (
          <Text {...props} level="h6" classnames={`${classnames} text-xl`}>
            {domToReact(children, options)}
          </Text>
        );
      }
      if (name === "p") {
        const props = attributesToProps(attribs);
        return (
          <Text {...props} level={level} classnames={`${classnames}`}>
            {domToReact(children, options)}
          </Text>
        );
      }

      if (name === "strong") {
        return (
          <span className="font-bold">{domToReact(children, options)}</span>
        );
      }

      if (name === "ul") {
        return (
          <ul role="list" className={`${classnames} mt-8 space-y-3 list-disc`}>
            {domToReact(children, options)}
          </ul>
        );
      }

      if (name === "ol") {
        return (
          <ol
            role="list"
            className={`${classnames} mt-8 space-y-3 list-decimal`}
          >
            {domToReact(children, options)}
          </ol>
        );
      }

      if (name === "li") {
        return (
          <li className="gap-x-3 ml-5">
            <Text level={level}>{domToReact(children, options)}</Text>
          </li>
        );
      }

      if (name === "a") {
        return (
          <Link href={attribs.href} target="_blank">
            <span className="relative underline decoration-accent-500 break-all">
              {domToReact(children, options)}
            </span>
          </Link>
        );
      }

      if (name === "blockquote") {
        return (
          <blockquote className="p-4 my-4 border-s-4 border-primary-500 italic font-bold leading-relaxed text-gray-900">
            {domToReact(children, options)}
          </blockquote>
        );
      }

      if (name === "img") {
        return (
          <img
            className="w-full rounded-2xl"
            {...attribs}
            style={{ aspectRatio: `${attribs.width}/${attribs.height}` }}
          />
        );
      }

      if (name === "figure") {
        return (
          <figure className="image lg:w-[120%] lg:-left-[10%]">
            {domToReact(children, options)}
          </figure>
        );
      }
    },
  };

  if (!text) return null;
  return parse(text, options);
};
export default RichText;
