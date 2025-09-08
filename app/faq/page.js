"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function AccordionItem({ question, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 dark:border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <span className="font-medium text-gray-800 dark:text-gray-200">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="pb-4 text-gray-600 dark:text-gray-300">{children}</div>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="max-w-4xl bg-gray-100 mx-auto px-6 py-12 dark:bg-gray-900">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">FAQ</h1>
        <p className="text-gray-500 dark:text-gray-400">Frequently Asked Questions</p>
      </div>

      {/* Opening an Account */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Opening an account</h2>

        <AccordionItem question="Who can open a trading account?">
          <p className="font-semibold text-gray-800 dark:text-gray-200">Individuals</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
            <li>Any individual of legal age with valid IDs and a bank account.</li>
            <li>
              Non-resident foreign nationals may contact our Back Office at{" "}
              <a href="mailto:iConnect@cnnsecurities.com" className="text-blue-600 dark:text-blue-400 underline">
                iConnect@cnnsecurities.com
              </a>.
            </li>
          </ul>

          <p className="font-semibold text-gray-800 dark:text-gray-200">Corporations</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Any legitimate corporation subject to required documents.</li>
            <li>
              Foreign corporations should contact{" "}
              <a href="mailto:info@cnnsecurities.com" className="text-blue-600 dark:text-blue-400 underline">
                info@cnnsecurities.com
              </a>.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem question="How do I open an account?">
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Download and fill up the Online Application Kit.</li>
            <li>Complete the Customer Account Information Form (CAIF).</li>
            <li>Print and sign the CAIF and signature cards.</li>
            <li>
              Submit requirements to CNN Securities, Inc. Unit 2502, The Orient Square,
              Ortigas Centre, Pasig City.
            </li>
            <li>Wait for e-mail confirmation.</li>
          </ol>
        </AccordionItem>

        <AccordionItem question="What requirements are needed for new clients?">
          <ol className="list-decimal pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Customer Account Information Form (CAIF)</li>
            <li>Online Trading Agreement</li>
            <li>Two specimen signature cards</li>
            <li>Two valid government-issued IDs</li>
            <li>Proof of billing</li>
          </ol>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Additional requirements may apply for foreigners and corporations.
          </p>
        </AccordionItem>
      </section>

      {/* Trading */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Trading</h2>

        <AccordionItem question="When can I start trading?">
          <p className="text-gray-700 dark:text-gray-300">
            You can start trading after your initial deposit has been received
            and cleared (1–3 banking days). Confirmation will be sent via email.
          </p>
        </AccordionItem>

        <AccordionItem question="What can I trade?">
          <p className="text-gray-700 dark:text-gray-300">
            You can buy or sell any stock listed in the Philippine Stock Exchange (PSE).
          </p>
        </AccordionItem>

        <AccordionItem question="How do I place orders?">
          <p className="text-gray-700 dark:text-gray-300">
            You can place orders online via our trading platform or by contacting
            our brokers directly.
          </p>
        </AccordionItem>
      </section>

      {/* Funding */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Funding & Withdrawals</h2>

        <AccordionItem question="How do I fund my account?">
          <p className="text-gray-700 dark:text-gray-300">
            Funding can be made via bank deposit, online transfer, or other
            supported payment methods. Always email proof of deposit to{" "}
            <a href="mailto:funds@cnnsecurities.com" className="text-blue-600 dark:text-blue-400 underline">
              funds@cnnsecurities.com
            </a>.
          </p>
        </AccordionItem>

        <AccordionItem question="How do I withdraw funds?">
          <p className="text-gray-700 dark:text-gray-300">
            Submit a withdrawal request through your online account. Processing
            takes 1–3 business days.
          </p>
        </AccordionItem>
      </section>

      {/* Fees */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Fees</h2>

        <AccordionItem question="What are the transaction fees?">
          <p className="text-gray-700 dark:text-gray-300">
            Trading fees include commission, VAT, PSE fees, SCCP fees, and other
            regulatory charges. A full breakdown is available on our website.
          </p>
        </AccordionItem>
      </section>

      {/* Trading Hours */}
      <section>
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">PSE Trading Hours</h2>

        <AccordionItem question="What are the trading hours?">
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Pre-Open: 9:00 AM – 9:30 AM</li>
            <li>Regular Trading: 9:30 AM – 12:00 NN, 1:30 PM – 3:30 PM</li>
            <li>Market Close: 3:30 PM – 3:40 PM</li>
          </ul>
        </AccordionItem>
      </section>
    </main>
  );
}
