"use client";

import { motion } from "framer-motion";
import { FileCheck2, FlaskConical, Sparkles, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SubSection({ icon: Icon, title, children }) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-brand-accent" />
        <h3 className="text-sm font-bold text-brand-primary">{title}</h3>
      </div>
      {children}
    </div>
  );
}

/**
 * Certification & Finish Trust Block
 * @param {{
 *   mtc: { title: string, items: string[] },
 *   labCerts: { title: string, items: string[] },
 *   finish: { title: string, surfaceFinish: string[], packagingOptions: string[] },
 *   inView?: boolean
 * }} props
 */
export default function CertificationBlock({ mtc, labCerts, finish, inView = true }) {
  if (!mtc && !labCerts && !finish) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <FileCheck2 className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Certification &amp; Finish
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mtc && (
          <SubSection icon={FileCheck2} title={mtc.title}>
            <ul className="space-y-1.5">
              {mtc.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-gray-600"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </SubSection>
        )}

        {labCerts && (
          <SubSection icon={FlaskConical} title={labCerts.title}>
            <ul className="space-y-1.5">
              {labCerts.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-gray-600"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </SubSection>
        )}

        {finish && (
          <SubSection icon={Sparkles} title={finish.title}>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1.5">
                  Surface Finish
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {finish.surfaceFinish.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-medium bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1.5">
                  Packaging Options
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {finish.packagingOptions.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-medium bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SubSection>
        )}
      </div>
    </motion.div>
  );
}
