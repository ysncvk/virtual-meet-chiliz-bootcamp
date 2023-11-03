import BackToHub from "@/components/BackToHub";
import { useBalances } from "@/hooks/useBalances";
import React from "react";
import styles from "@/styles/Home.module.css";
import Countdown from "react-countdown";
import { formatBalance } from "@/util/formatBalance";

function MeetingPage() {
    const { message, tokenBalances,nativeBalance } = useBalances();
    const tokenChosen = "0xe9506f70be469d2369803ccf41823713bafe8154";
    const native =
        nativeBalance && Number(nativeBalance.balance) > 0
            ? formatBalance(nativeBalance.balance)
            : 0;
    const fanToken = tokenBalances.find(item=>item.token_address===tokenChosen)
    const isEligible = fanToken?.token_address === tokenChosen;


    const countdownDate = new Date("2023-12-31T23:59:59");





    if (message) return <p>{message}</p>;
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div>
                    <h1 className="my-8 text-center text-3xl font-bold  ">
                        MEETING WILL START SOON!
                    </h1>

                    <Countdown
                        date={countdownDate}
                        className={styles.countdown}
                    />

                    <h2 className="my-8 text-center text-xl font-bold">
                        <div className="my-4">
                            only {fanToken?.name} holders will be eligible to join
                        </div>
                        <div className="my-4">{`Your ${fanToken?.name} balance is ${fanToken?.balance}`}</div>
                        <div className="my-4 ">
                            {`YOU ARE ${isEligible ? "" : "NOT"} ELIGIBLE`}
                        </div>
                    </h2>

                    <BackToHub />
                </div>
            </div>
        </main>
    );
}

export default MeetingPage;
