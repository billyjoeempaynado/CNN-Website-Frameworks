"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function AccordionItem({ id, question, children, openId, setOpenId }) {
  const isOpen = openId === id;

  return (
    <div className="border-b border-gray-300 dark:border-gray-700">
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <span className="font-medium text-gray-800 dark:text-gray-200">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Animated content */}
      <div
        className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 py-4"
            : "grid-rows-[0fr] opacity-0 py-0"
        }`}
      >
        <div className="overflow-hidden text-gray-600 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <main className="max-w-4xl bg-gray-100 mx-auto px-6 py-12 dark:bg-gray-900">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">FAQ</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Frequently Asked Questions
        </p>
      </div>

      {/* Opening an Account */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Opening an account
        </h2>

        <AccordionItem
          id="account1"
          question="Who can open a trading account?"
          openId={openId}
          setOpenId={setOpenId}
        >
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Individuals
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
            <li>Any individual of legal age with valid IDs and a bank account.</li>
            <li>
              Non-resident foreign nationals may contact our Back Office at{" "}
              <a
                href="mailto:iConnect@cnnsecurities.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                iConnect@cnnsecurities.com
              </a>.
            </li>
          </ul>
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Corporations
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Any legitimate corporation subject to required documents.</li>
            <li>
              Foreign corporations should contact{" "}
              <a
                href="mailto:info@cnnsecurities.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                info@cnnsecurities.com
              </a>.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem
          id="account2"
          question="How do I open an account?"
          openId={openId}
          setOpenId={setOpenId}
        >
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Download and fill up the Online Application Kit.</li>
            <li>Complete the Customer Account Information Form (CAIF).</li>
            <li>Print and sign the CAIF and signature cards.</li>
            <li>
              Submit requirements to CNN Securities, Inc. Unit 2502, The Orient
              Square, Ortigas Centre, Pasig City.
            </li>
            <li>Wait for e-mail confirmation.</li>
          </ol>
        </AccordionItem>

        <AccordionItem
          id="account3"
          question="What requirements are needed for new clients?"
          openId={openId}
          setOpenId={setOpenId}
        >
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
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Trading
        </h2>

        <AccordionItem
          id="trading1"
          question="When can I start trading?"
          openId={openId}
          setOpenId={setOpenId}
        >
          <p className="text-gray-700 dark:text-gray-300">
            You can start trading after your initial deposit has been received
            and cleared (1–3 banking days). Confirmation will be sent via email.
          </p>
        </AccordionItem>

        <AccordionItem
          id="trading2"
          question="What can I trade?"
          openId={openId}
          setOpenId={setOpenId}
        >
          <p className="text-gray-700 dark:text-gray-300">
            You can buy or sell any stock listed in the Philippine Stock
            Exchange (PSE).
          </p>
        </AccordionItem>

        <AccordionItem
          id="trading3"
          question="How do I place orders?"
          openId={openId}
          setOpenId={setOpenId}
        >
          <p className="text-gray-700 dark:text-gray-300">
            You can place orders online via our trading platform or by
            contacting our brokers directly.
          </p>
        </AccordionItem>
      </section>

      {/* Funding */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Funding & Withdrawals
        </h2>

        <AccordionItem
          id="funding1"
          question="How do I fund my account?"
          openId={openId}
          setOpenId={setOpenId}
        >
          <p className="text-gray-700 dark:text-gray-300">
            Funding can be made via bank deposit, online transfer, or other
            supported payment methods. Always email proof of deposit to{" "}
            <a
              href="mailto:funds@cnnsecurities.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              funds@cnnsecurities.com
            </a>.
          </p>
        </AccordionItem>

        <AccordionItem
          id="funding2"
          question="How do I withdraw funds?"
          openId={openId}
          setOpenId={setOpenId}
        >
          <p className="text-gray-700 dark:text-gray-300">
            Submit a withdrawal request through your online account. Processing
            takes 1–3 business days.
          </p>
        </AccordionItem>
      </section>

      {/* Fees */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Fees
        </h2>

        <AccordionItem
          id="fees1"
          question="What are the transaction fees?"
          openId={openId}
          setOpenId={setOpenId}
        >
          <p className="text-gray-700 dark:text-gray-300">
            Trading fees include commission, VAT, PSE fees, SCCP fees, and other
            regulatory charges. A full breakdown is available on our website.
          </p>
        </AccordionItem>
      </section>

      {/* Trading Hours */}
      <section>
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          PSE Trading Hours
        </h2>

        <AccordionItem
          id="hours1"
          question="What are the trading hours?"
          openId={openId}
          setOpenId={setOpenId}
        >
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
