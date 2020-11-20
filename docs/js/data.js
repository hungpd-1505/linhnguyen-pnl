var faqData = [{"category":"概要","question":"LINE SMART CITY GovTechプログラムとはなんですか。","answer":"福岡市とLINE Fukuoka株式会社において、全国の自治体のモデルケースとするべく強化してきた福岡市LINE公式アカウントをモデルにした、全国の自治体が従来より簡易に導入可能にすべく、該当機能のソースコードを無償提供するプログラムです。"},{"category":"概要","question":"既にLINE公式アカウントを運用しているのですが、それとの違いや導入することのメリットを教えてください。","answer":"本プログラムを活用することによって、LINE公式アカウントで標準提供されている機能では実現できない、情報カテゴリごとの配信機能や行政サービスの申請、市民へのアンケートや問い合わせ用のチャットボットなどの機能を導入することができます。\n導入いただくことで自治体と市民とのコミュニケーションがスムーズとなり、行政サービスの満足度向上や業務効率化を図ることができます。"},{"category":"概要","question":"LINE公式アカウントの開発に、LINE SMART CITY GovTechプログラムを活用するメリットを教えてください。","answer":"ゼロから機能開発を行う場合と比べて、本プログラムで提供されるソースコードを利用することで、企画工数・開発工数が下がり、導入コストの削減や導入スケジュールの短縮が見込まれます。\nまた、様々な開発事業者が活用することで、地場の開発事業者から導入できる可能性もございます。"},{"category":"概要","question":"既にLINE公式アカウントを持っている場合は、統一、移行はできますか。","answer":"LINE公式アカウントの標準機能のみを活用して運用されている場合は、当該アカウント内にLINE SMART CITY Govtechプログラムの機能を実装することができます。\nただし、既に開発事業者を通して、なんらかのサービスを実装されている場合は、当該開発事業者との調整が必要となり、調整の結果次第では導入いただけない可能性もございます。既存の取引先である開発事業者へご相談ください。"},{"category":"導入の進め方","question":"お問い合わせから導入までどのくらいの期間がかかりますか。","answer":"提供機能や作成データにもよりますので、詳しくは開発事業者へお問い合わせください。"},{"category":"概要","question":"自治体が負担するランニング費用として月額料金は発生しますか。","answer":"サーバーおよび機能の保守のため費用が発生いたします。\n詳しくは開発事業者へお問い合わせください。"},{"category":"概要","question":"LINE株式会社の提供する地方公共団体プランとの違いを教えてください。","answer":"LINE株式会社が提供する地方公共団体プランは、一定の条件を満たす地方公共団体のLINE公式アカウントの料金を無償化するものです。\n詳しくは、LINE株式会社にお問い合わせください。"},{"category":"導入の進め方","question":"LINE SMART CITY GovTechプログラムを導入するためには、どのように進めていけば良いですか。","answer":"どういった機能を導入したいのかなど、要望を取りまとめていただく必要がございます。\n詳しくは開発事業者までお問い合わせください。"},{"category":"機能","question":"LINE SMART CITY GovTechプログラムを通して、取得した個人情報はどこで管理されますか。","answer":"LINE SMART CITY GovTechプログラムを通して取得した個人情報は、十分にセキュリティ対策を施したクラウド環境へ格納され、各自治体様がご契約する開発事業者によって管理されます。"},{"category":"導入の進め方","question":"見積もりがほしい。","answer":"導入したい機能など自治体様のご要望をとりまとめて、開発事業者へお問い合わせください。"},{"category":"導入の進め方","question":"LINE SMART CITY GovTechプログラムの提供メニューに記載のない独自機能の導入も可能か。","answer":"開発事業者ごとに提供サービスや価格が異なるため、開発事業者へお問い合わせください。"},{"category":"機能","question":"","answer":"提供メニューにない独自機能も開発して導入することができますが、追加で開発の作業が発生いたします。開発事業者へお問い合わせください。"},{"category":"概要","question":"他のSNSではなく、LINEを活用するメリットはなんですか。","answer":"LINEは国内で最もユーザが多いSNSのひとつであり、個々にパーソナライズした情報を届けたり行政サービスの申請などをするのに適しております。"},{"category":"機能","question":"水道の開閉栓のLINE受付はできますか。","answer":"LINE SMART CITY GovTechプログラムで提供する機能を組み合わせて、一部調整することで比較的容易に実装ができるものと考えております。"},{"category":"機能","question":"道路公園等通報のLINE受付はできますか。","answer":"LINE SMART CITY GovTechプログラムで導入いただくことが可能です。"},{"category":"機能","question":"自治体内の既存システムと連携することはできますか。","answer":"自治体内の既存システムとの連携は可能ですが、連携のための開発作業の規模により記載の金額から別途お見積もりとなります。"},{"category":"AWS","question":"環境構築に必要なものはなんですか。","answer":"環境構築に必要なリソースは以下の通りです。\n・<a href=\"https://aws.amazon.com/jp/console/\">AWS</a>のアカウント\n・デプロイに利用するAWSアカウントのIAM権限\n・<a href=\"https://developers.line.biz/ja/\">LINE Developers</a>用のLINEアカウントもしくはビジネスアカウント\n・LINEのMessaging API/LINEログインのチャネル\n・デプロイ用のPCもしくはコンテナ環境"},{"category":"実行環境","question":"環境構築に対応しているOSはなんですか。","answer":"Windows, Mac, Linux等OSの制限は基本的にはありませんが、bashの実行環境は必要です。"},{"category":"AWS","question":"使用しているAWSリソースはなんですか。","answer":"以下のマネージドサービスを利用しています。\n環境構築: AWS CloudFormation, AWS SAM\n静的リソース: Amazon CloudFront, Amazon DynamoDB, Amazon S3, Amazon Cognito\n動的リソース: Amazon API Gateway, AWS Lambda\nその他: Amazon SES, Amazon SQSなど"},{"category":"実行環境","question":"使用している言語はなんですか。","answer":"機能によって異なりますが、AWS Lambda内はNode.jsまたはPythonを使用しています。\n環境構築用のスクリプトは、bashとNode.jsを用いています。"},{"category":"AWS","question":"環境名とはなんですか。","answer":"構築されるシステムを一意に識別するための呼称です。\n環境名は「AWSプロファイル名」 + 「開発者名など固有の値」で構成され、クラウドフォーメーションにおけるスタック名のプレフィックスやシークレットマネージャのシークレット名、URLのサブドメイン名等に用いられます。\n\n例）\n本番環境：プロファイル名「lsc-fukuoka」→ 環境名「lsc-fukuoka-prod」\n開発環境：プロファイル名「lsc-fukuoka-dev」→環境名「lsc-fukuoka-dev-tanaka」"},{"category":"AWS","question":"一度、環境を構築して削除した後にすぐに環境の再構築ができないが、どうしたらよいか。","answer":"環境削除時のコマンドに --eliminate オプションを付与しない場合、DynamoDBリソースは保持されます。\nその場合、削除→作成ごとにリソースは増加し、AWS上限を超える場合があります。\nAWSコンソールからDynamoDBテーブルを削除いただくか、AWSへリソース上限を上げる申請を実施してください。\n"},{"category":"AWS","question":"「lsc.sh refresh」で環境を更新したつもりが、新しいDynamoDBが作成されてしまった。どうすればよいか。","answer":"AWS CloudFormation仕様で、テンプレートのDynamoDB記載箇所を複数変更、LocalSecondayIndexを追加する、といった一定の記載変更の上でスタック更新を実施すると、既存のテーブルは残しつつも新しくテーブルをを作成することがあります。できるだけテンプレートの変更は少しずつ実施し、こまめに更新されることをお勧めいたします。"},{"category":"AWS","question":"カスタムドメインの作成方法が面倒だが、どうすればよいか。","answer":"カスタムドメインと指定使用するRoute53のホストゾーンIDおよびACM(AWS certificate manage)のサーバ証明書発行時に作成される識別子はAWS規定の手順で作成する必要があります。ホストゾーンIDと識別子をそれぞれ、AWS SecretsManagerのDNS_DOMAIN_LIFF_HOSTED_ZONE_ID, DNS_DOMAIN_LIFF_CERTIFICATE_ID に設定しておくことで本サービス向けのカスタムドメインは自動で作成されます。"},{"category":"AWS","question":"最初のログインID/PWはなんですか。","answer":"セキュリティのため、システム構築時のデフォルトユーザは設けておりません。\n最初のユーザは、以下のコマンドで作成してください。\n\n./lsc -e [環境名] -p [プロファイル名] users \n\nユーザを追加する場合、当該ユーザで管理画面にログイン後、ユーザ設定より新規ユーザを追加してください。"},{"category":"実行環境","question":"Node.js 12より前のバージョンで構築できますか。","answer":"ドキュメント記載のバージョンをお使いください(Node.jsは12以上です)"},{"category":"AWS","question":"コマンド実行後、しばらくすると停止したように見えます。どうしたらよいですか。","answer":"静的リソース(特にAmazon CloudFront)作成時は時間がかかることがあります。しばらくお待ちください。"},{"category":"AWS","question":"AWSのIAMに必要な権限がわかりません。","answer":"アクセス権限は利用者の運用条件に応じてIAM設定を実施します。詳細はline-smart-cityリポジトリの「開発者向け情報」をご確認ください。"},{"category":"AWS","question":"CIツールで環境構築はできますか。","answer":"CIツールで環境構築可能です。詳細は、line-smart-cityリポジトリの「開発者向け情報」を参照ください。"},{"category":"AWS","question":"AWSの利用料はどれくらいかかるのか。","answer":"AWS使用頻度に依存いたします。\n実際の費用の例としては、月額数十ドル程度となります。"},{"category":"LINE","question":"LINEに関する設定は環境構築後に実施することが可能ですか。","answer":"MessagingAPIに関しては、環境構築後に管理画面の「システム設定 > LINE設定」より設定可能です。\nLINEログインに関しては、line-smart-cityリポジトリの「開発者向け情報」の記載通り構築時の設定が必要です。\n※構築後の変更も可能ですが、AWS Secrets Managerでの設定変更が必要です"},{"category":"AWS","question":"カスタムドメインとはなんですか。","answer":"利用者がアクセスするURLは、デフォルトでAmazon CloudFrontやAmazon API Gateway規定のドメインが作成されます(xxxxxxx.cloudfront.com 等)が、独自にドメインを取得し、カスタムドメインとして割り当てることも可能です。"},{"category":"AWS","question":"環境構築に約40〜50分ほどかかります。問題ないでしょうか。","answer":"Amazon CloudFrontのリソース作成は時間を要します。また、AWS CloudFormationのtemplateを順々に環境構築していますので、最初の環境構築は相応に時間が必要となります。更新に関しては、更新対象のリソースだけ実施すればよいため初回構築ほど時間は要しません。"},{"category":"実行環境","question":"ドキュメントなどを閲覧しても環境構築ができないのですが、どのように問い合わせしたらよいでしょうか。","answer":"GitHubの[Issue](https://github.com/linefukuoka/line-smart-city/issues)に詳しい情報をご記入ください。担当から返答いたします。"},{"category":"実行環境","question":"GitHubのissue以外の問い合わせ手段はないのですか。","answer":"現状はGitHubのissueに限定しております。"},{"category":"AWS","question":"AWS以外のクラウド環境には対応してませんか。","answer":"現状は、AWSのみの対応となっています。その他の環境への対応を検討しております。"},{"category":"実行環境","question":"「lsc.sh setup」実行中にエラーが発生しました。どうしたら良いでしょうか。","answer":"エラー原因にもよりますが、README通りに実施してそれでもエラーになる場合、AWSリソースの使用権限、または上限に達していないかなどをご確認ください。\nまた、エラー文言等をキーワードにして、本GitHubリポジトリのissuesにてフィルター検索を実行していただくと過去の類似ケースを確認できる場合もございます。それでも見つからない場合は、issueを登録してください。担当エンジニアが対応いたします。"},{"category":"作成・編集","question":"作成した帳票を修正したい（選択肢の増減・文言変更）。","answer":"修正可能な項目と不可能な項目がございます。今後修正可能な項目は拡張させていきます。"},{"category":"作成・編集","question":"作成した帳票を修正しても大丈夫か（影響範囲）。","answer":"変更可能な項目は修正いただいて問題ございません。"},{"category":"作成・編集","question":"作成した帳票をLINEで表示するにはどうしたらよいか。","answer":"LINEログインのチャネル開設とLIFFの作成が必要になります。詳細はline-smart-cityリポジトリの「開発者向け情報」をご確認ください"},{"category":"一般設定","question":"メニューバーの色を変更する場合はどうすればいいですか。","answer":"システム設定の「一般設定」画面からテーマカラーを選択して「更新」をクリックしてください。"},{"category":"概要","question":"保存されているデータは誰によって管理されますか（機密保持などはどうなっていますか。）","answer":"ご利用されるお客様ご自身、もしくはご契約いただく開発事業者によって管理いただくことになります。なおシステム上はすべてのデータはAWS上に保存されており、安全に運用されます。"},{"category":"自動配信","question":"セグメント配信における自動配信はどのように設定できますか。","answer":"メールマガジンのコンテンツを自動でLINEへ転送する機能がございます。等機能の設定は、管理画面で設定と、AWS SecretsManagerでの設定が必要な箇所があります。現時点では管理画面のみの設定とはなっていません。\n\nメールからLINEへ配信する手順については、line-smart-cityリポジトリの「開発者向け情報」を参照ください。"},{"category":"","question":"アイコンを変更することは可能ですか。","answer":"可能です。サインイン後、メニューの「システム設定」＞「一般設定」から変更してください。"},{"category":"","question":"ユーザ名の変更はできますか。","answer":"登録されたユーザ名を変更することはできません。どうしても変更されたい場合は新しいユーザ名を作成し、作成したIDでサインインし、元のIDを削除してください。"},{"category":"","question":"パスワードの変更はできますか。","answer":"自分のパスワードを変更したい場合、サインイン後、画面の右上に表示されるユーザ名を選択すると表示されるメニューから「パスワード変更」を選択し、画面の指示に従ってください。\n\nまたユーザ設定画面から変更する場合、自分のユーザ名を選択後、「パスワード変更」をクリックし、画面の指示に従って操作してください。"},{"category":"","question":"登録しているユーザのパスワードの変更はできますか。","answer":"ユーザ画面からパスワードを変更したいユーザをクリックし、「パスワードリセット」をクリックしてください。登録されているメール宛に変更手順が記されたメールが送付されます。"},{"category":"","question":"パスワードを忘れました。どうしたらいいですか。","answer":"画面の左下にある「パスワードをお忘れの方」と書かれている文字をクリックしてください。表示された画面でユーザ面を入力後に「認証コードを送信」をクリックすると、登録しているメールに認証コードが送信されます。あとはメールと画面の指示に従って作業をしてください。"},{"category":"","question":"登録しているユーザ名を忘れました。どうすればいいですか。","answer":"管理者（管理画面のadmins権限を持ったユーザ）にお問い合わせください。"},{"category":"","question":"正しくユーザ名やパスワードを入力しているのにサインインに失敗します。","answer":"見えない空白や改行などが入っている可能性が高いと考えられますので、再度入力しなおしてみてください。ブラウザやメーラー上からコピーペーストいた場合は、一度メモ帳などに張り付けて確認してください。それでもサインインできない場合はご自身が登録されたユーザであるか管理者（管理画面のadmins権限を持ったユーザ）にお問い合わせください。なお、オフラインではサインインできません。"},{"category":"","question":"サインイン方法が分かりません。","answer":"画面に従い、管理者（管理画面のadmins権限を持ったユーザ）から配布されているユーザ名とパスワードを入力してから「サインインボタン」をクリックしてください。"},{"category":"一般","question":"HOME画面では何ができますか。","answer":"LINEユーザが送信した帳票の管理が可能です。"},{"category":"一般","question":"セグメント配信画面では何ができますか。","answer":"受信したい内容に応じて(セグメント化して)配信が可能です。配信元のコンテンツとしては、メールおよび管理画面からコンテンツ手動作成による配信が可能です。"},{"category":"手動・予約配信","question":"セグメント配信の仕方を教えて下さい。","answer":"管理画面から配信する場合の手順概要です。\n\n1. 管理画面のメニューから「セグメント配信」＞「配信一覧」＞「新規配信」の順でクリック。\n2. 配信名を決め、配信先を絞り込み、配信日時を設定し、配信コンテンツを作成。\n3. プレビュー画面で配信イメージを確認し、「新規配信」をクリック。\n\nメールからLINEへ配信する手順については、line-smart-cityリポジトリの「開発者向け情報」を参照ください。\n"},{"category":"手動・予約配信","question":"地区ごとに配信を設定したいのですがやり方が分かりません。","answer":"帳票作成時に地区を選択肢に設けたLIFFを作成し、その帳票を配信先の絞り込み条件に使用してください。"},{"category":"手動・予約配信","question":"実施したアンケートへの返信に対して、さらに返信する機能はありますか。","answer":"現時点では頂いた返信にさらに返信する機能はございません。"},{"category":"その他","question":"カテゴリと地域は追加・削除はできますか。","answer":"帳票で選択可能な範囲内において、セグメント配信対象のカテゴリや地域を追加・削除可能です。帳票のカテゴリや地域自体の追加・削除については開発検討中です。"},{"category":"その他","question":"下５行が消える設定は変更できますか。","answer":"メールマガジンの本文に対して、一定の正規表現を実施の上で各種加工が可能です。「下5行」を削除する設定の変更も可能です。"},{"category":"手動・予約配信","question":"配信のスケジュール設定はできますか。","answer":"可能です。配信コンテンツ作成時に配信スケジュールを設定してください。"},{"category":"手動・予約配信","question":"画像・動画・スタンプは送れますか。","answer":"現時点ではテキスト、画像の送信が可能です"},{"category":"手動・予約配信","question":"文字数制限はありますか。","answer":"LINE Messaging API仕様規定の文字数が最大文字数となります\n詳しくは、<a href=\"https://developers.line.biz/ja/reference/messaging-api/#send-narrowcast-message\">Messaging APIリファレンス</a>をご確認ください。"},{"category":"一般","question":"セグメント配信の既読数は分かりますか？","answer":"配信内容の既読数は分かりません。"},{"category":"自動転送・その他設定","question":"受信設定の内容変更(カテゴリなど)はできますか。","answer":"現時点では、帳票・アンケートのカテゴリ変更はできません。一部の文言等の変更は可能です。"},{"category":"手動・予約配信","question":"アンケート配信の仕方を教えて下さい。","answer":"アンケートは配信という形ではなく、LIFFを作成してリッチメニュー にLIFFを設定するという形で作成します。以下手順概要です。\n\n1. 管理画面のメニューから「帳票作成」＞「新しい帳票を作成」をクリックしてアンケートを作成\n2. 「帳票作成」の一覧にアンケートのタイトル・URLが表示されるのでURLをコピー\n3. 手順2でコピーしたURLをリッチメニュー のURIアクションとして設定\n\nリッチメニュー は <a href=\"https://developers.line.biz/ja/services/bot-designer/\">LINE BOT Designer</a>から作成してください。"},{"category":"導線設計・リッチメニュー","question":"LINE上のメインメニュー(リッチメニュー)は追加・変更・削除はできますか。","answer":"リッチメニュー は <a href=\"https://developers.line.biz/ja/services/bot-designer/\">LINE BOT Designer</a>から作成可能です。"},{"category":"手動・予約配信","question":"友だち全員に配信したいときはどうすればいいですか。","answer":"メニューの「セグメント配信」＞「新規配信」をクリックし、「全ての友だち」「今すぐ配信」をクリックし、コンテンツを作成し配信することが可能です。\nまた、全員への配信であればLINE OfficialAccount Managerから全ての友だちに配信することが可能です。"},{"category":"手動・予約配信","question":"セグメント配信のテスト配信はできますか","answer":"サンドボックス環境へテスト配信可能です。"},{"category":"一般","question":"帳票作成とは何ができる画面ですか。","answer":"登録ユーザ向けに簡単なアンケートを作成することができる画面です。作成した帳票はLINEアプリ上でLIFFとして表示させることが可能です。"},{"category":"一般","question":"帳票とは何ですか。","answer":"登録ユーザ向けの簡単なアンケート画面です。"},{"category":"作成・編集","question":"帳票はどうやって作成しますか。","answer":"帳票作成の画面で「空白」またはテンプレートを選択後、帳票登録画面から作成してください。"},{"category":"作成・編集","question":"質問の増やし方がわかりません。","answer":"メニューの「帳票作成」をクリックし、画面の中ほどにある「＋」のアイコンをクリックして、質問形式を選択してください。"},{"category":"作成・編集","question":"質問の減らし方がわかりません。","answer":"帳票登録画面で削除したい質問を選択すると、その下部にごみばこのアイコンが表示されますので、それをクリックしてください。"},{"category":"作成・編集","question":"質問の順番を変えることはできますか。","answer":"画面の中ほどにあるアイコンの横三本線のようなマークをクリックしてください。表示順を変更する画面が開きます。"},{"category":"作成・編集","question":"作った帳票が保存されませんでした。","answer":"作成した帳票は必ず画面中ほどの上部にある「帳票登録」をクリックして保存してください。クリックしない場合は保存されません。"},{"category":"作成・編集","question":"作成画面で表示されている絵は何ですか。","answer":"モバイル表示のイメージ画面です。作成中の帳票がモバイル端末上からどのように見えるのかを表しています。実際はユーザの画面サイズに左右されますので、あくまでも目安としてご利用ください。"},{"category":"作成・編集","question":"作った帳票が一覧に表示されません。","answer":"画面左のほうにある「並べ替え」から、条件を変更してみてください。並び順がタイトルになっていると、作成した帳票のタイトル名によっては2ページ目以降に表示されます。"},{"category":"作成・編集","question":"テンプレートを変更したい。","answer":"一度テンプレートを選んだ後に、帳票作成中にテンプレートを変更することはできません。\n再度テンプレートを選択し直す必要がございます。"},{"category":"作成・編集","question":"作成した帳票を削除したい。","answer":"作成した帳票の削除はできませんが、帳票を無効化する事ができます。"},{"category":"作成・編集","question":"帳票を無効化すると、どうなりますか。","answer":"LINEユーザが帳票送信時に「無効」となっている旨が表示されます。"},{"category":"作成・編集","question":"帳票を無効化する方法を教えてください。","answer":"無効化したい帳票の右端にあるトリコロンをクリックし、「無効にする」を選択してください。"},{"category":"作成・編集","question":"一度無効化した帳票は有効化できますか。","answer":"有効化したい帳票の右端にあるトリコロンをクリックし、「有効にする」を選択してください。"},{"category":"一般","question":"「LIFF・WEBを開く」とは何ですか。","answer":"現在のブラウザ上で作成した帳票を表示させることができます。LINEログインの認証も実施しますので実際にLINEで表示されるかどうかも含めて確認できます。"},{"category":"一般","question":"「LIFF・WEBを開く」をクリックすると「400 Bad Request Invalid redirect_uri value. Check if it is registered in a LINE Developers site.」と表示されます。","answer":"LINE DevelopersでLIFFの設定が正しいかを確認してください。\nまた、閲覧しようとしているPCや携帯にLINE アプリがインストールされているかを確認してください。\n\n詳細は、line-smart-cityリポジトリの「開発者向け情報」を参照ください。\n"},{"category":"作成・編集","question":"タイトル名の下に表示されているURLは何ですか。","answer":"LINEアプリ上でLIFFとして表示させる際に必要なURLです。リッチメニューのURIアクションしてご利用ください。"},{"category":"作成・編集","question":"アンケートや受信設定などの帳票の設定はどこでできますか。","answer":"メニューの「帳票作成」をクリックし、帳票を作成してください。この帳票をアンケートや受信設定として使用可能です。"},{"category":"作成・編集","question":"「コピーを作成」とは何ですか？","answer":"同種の質問項目を作成する機能です。"},{"category":"作成・編集","question":"「コピーを作成」はいつ使うものですか？","answer":"同種の質問項目を作成し、の手動入力を減らしたい際に利用します。"},{"category":"受付・管理","question":"アンケートへの返信に対して、さらに返信する機能はありますか。","answer":"帳票作成にて実装予定です。"},{"category":"作成・編集","question":"アンケート作成方法を教えて下さい。","answer":"管理画面のメニューから「帳票作成」＞「新しい帳票を作成」をクリックしてアンケートを作成できます。"},{"category":"作成・編集","question":"アンケートの設定方法を教えて下さい。","answer":"アンケートの設定は、メニューの「帳票作成」で作成したLIFFをリッチメニュー のURIアクションとして設定してください。"},{"category":"受付・管理","question":"アンケートの結果はどこで見れますか。","answer":"メニューの「HOME」で確認可能です。"},{"category":"作成・編集","question":"画像は使えますか。","answer":"現時点では画像の使用はできません。"},{"category":"一般","question":"シナリオ設定の画面では何ができますか。","answer":"作成されたチャットボットシナリオをLINE上に反映させることができる画面です。"},{"category":"作成・編集","question":"シナリオ名の変更はできますか。","answer":"変更できますが、そのためには登録されているシナリオをすべて削除する必要があります。"},{"category":"一般","question":"「本番」「サンドボックス」とは何ですか。","answer":"「本番」とは一般に公開されるLINEアカウントと連携する環境のことです。「サンドボックス」とはその前に動作の確認を行うための環境で、限定公開のLINEアカウントを用いて運用します。"},{"category":"有効化","question":"「有効にする」とは何ですか。","answer":"格納したシナリオをその環境に反映させること、またはその作業です。「バージョン」で反映したいシナリオを選択し、「有効にする」をクリックしてください。"},{"category":"有効化","question":"「有効にする」ボタンが動きません。","answer":"ボタンの色がグレーになっている場合、現在設定されているシナリオが反映されており、ボタンはクリックできません。"},{"category":"有効化","question":"間違ったシナリオを有効化しました。取り消せますか。","answer":"取り消し作業はできませんが、正しいバージョンのシナリオを選択して有効化することで同様の効果が見込まれます。"},{"category":"有効化","question":"登録したいバージョンのシナリオがありません。","answer":"サンドボックスにある「インポート」をクリック後、画面の指示に従ってシナリオをインポートしてください。"},{"category":"導線設計・リッチメニュー","question":"全体構成とは何ですか。","answer":"選択したバージョンがどのような構成であるかをツリー構造で表示します。"},{"category":"導線設計・リッチメニュー","question":"全体構成が自分で作成したシナリオと異なるように見えます。","answer":"編集画面で編集したシナリオは反映されません。有効バージョンのシナリオを確認してください。"},{"category":"インポート/エクスポート","question":"何がエクスポートできますか。","answer":"現在選択しているバージョンのシナリオがエクスポートされます。この時、編集画面で作成したシナリオはダウンロードされません。"},{"category":"インポート/エクスポート","question":"LBD形式とは何ですか。","answer":" <a href=\"https://developers.line.biz/ja/services/bot-designer/\">LINE BOT Designer</a>で利用できる形式です。"},{"category":"インポート/エクスポート","question":"どんな形式のファイルがインポートできますか。","answer":"LBDファイル形式のファイルのみインポートできます。"},{"category":"インポート/エクスポート","question":"インポートに失敗します。","answer":"LBDファイルのbot名とシナリオ名が一致しているか確認してください。"},{"category":"インポート/エクスポート","question":"インポートしたら以前のバージョンが消えてしました。","answer":"バージョンが同じものは上書き保存されます。重複しないようにバージョン名を変更してください。"},{"category":"インポート/エクスポート","question":"バージョン名は勝手に変えても大丈夫ですか。","answer":"問題ありません。"},{"category":"インポート/エクスポート","question":"「有効にする」をチェックするとどうなりますか。","answer":"インポート前のポップアップ画面で「有効にする」をクリックすると同時にシナリオが有効されます。"},{"category":"作成・編集","question":"シナリオ設定はどこでできますか","answer":"メニューの「シナリオ設定」から各種操作を実施してください。"},{"category":"作成・編集","question":"削除したシナリオを復活することはできますか。","answer":"再度同じ内容のシナリオをインポートしてください。"},{"category":"作成・編集","question":"シナリオの編集方法を教えてください。","answer":"メニューの「シナリオ設定」から編集したいバージョンのシナリオを選択して「編集」ボタンをクリックしてください。"},{"category":"作成・編集","question":"「トーク名」とは何ですか。","answer":"これはLINE Bot DesignerのLBDファイルから派生した用語で、既存のメッセージを使用してユーザとボット間のチャットシミュレーションを作成できます。\n\nLINEアプリ上では、同じ「シナリオ」または「フロー」に関連するメッセージをグループ化する方法として機能します。 「損傷レポート」や「ゴミの分別」などの特別なシナリオを特定するためにも使用されます。"},{"category":"作成・編集","question":"「トークを利用する」とは何ですか。","answer":"あらかじめ格納されている「損傷報告」と「ゴミ分別」のシナリオを利用することです。クリックするとその切り替え画面が表示されます。"},{"category":"作成・編集","question":"トーク画面から新しいトークを作成できますか。","answer":"新しくトークを作成することはできませんので、追加したいシナリオのバージョンをエクスポートし、トークを追加後に再度インポートしてください。"},{"category":"作成・編集","question":"複合メッセージとは何ですか。","answer":"Botが一度に返却する複数のメッセージを「複合メッセージ」と称しています。インポートされたシナリオの中から最大5メッセージを選択して作成します。"},{"category":"作成・編集","question":"複合メッセージはどうやって作成しますか。","answer":"編集画面で「複合メッセージを追加」をクリックし、表示されているシナリオからメッセージにチェックしたのち、名前を付けてから「追加」をクリックします。"},{"category":"作成・編集","question":"編集はどうやって行いますか。","answer":"編集したいトークの左端にある鉛筆のアイコンをクリックしてください。画面に従って修正したい部分を変更し、「保存」をクリックしてください。"},{"category":"作成・編集","question":"間違ってトークを削除してしまいました。復活できますか。","answer":"一度削除したトークは復活できません。事前にデータエクスポートされることをお奨めします。"},{"category":"作成・編集","question":"「名前」とは何ですか。","answer":"そのメッセージのタイトルです。メッセージを識別しやすくするために使用します。また、LINEアプリのトーク一覧のアカウント名としても表示されます。"},{"category":"作成・編集","question":"「名前」が変更できないものと変更できるものがありますが、違いは何ですか。","answer":"「名前」が変更できるトークは、LBDファイルから登録、または複合メッセージで結合したトークです。変更できないトークは、システム固有のシナリオです。"},{"category":"作成・編集","question":"「ユーザテキスト」とは何ですか。","answer":"チャットボットを呼び出す際にユーザが送信するメッセージです。"},{"category":"作成・編集","question":"「ユーザテキスト」は変更できますか。","answer":"メニューの「シナリオ設定」をクリックし、変更したいトークのユーザテキストをダブルクリックしてください。その後表示されるポップアップ画面の内容に従って入力し、「保存」をクリックします。"},{"category":"作成・編集","question":"「ユーザテキスト」に＋の記号が入っているのはなぜですか。","answer":"そのトークを呼び出すキーワードが設置されていないためです。ダブルクリックをして登録してください。"},{"category":"作成・編集","question":"「ユーザテキスト」に＋の記号が入っているものとは言っていないものがあります。なぜですか。","answer":"LBDファイルを作成した際、トーク画面で呼び出しキーワードを設定しなかったためだと考えられます。"},{"category":"作成・編集","question":"「ユーザテキスト」が求めるキーワードと違います。","answer":"LBDファイルを作成した際、トーク画面で直前の言葉が呼び出しキーワードではなかったためだと考えられます。"},{"category":"作成・編集","question":"「ユーザテキスト」の設定をしないとどうなりますか。","answer":"そのメッセージはメッセージアクションとしては呼び出されなくなります。ポストバックアクションが設定されている場合は呼び出されます。"},{"category":"作成・編集","question":"編集画面で表示される全体構成図が表示されているトークと異なります。","answer":"選択しているシナリオバージョンの構成図が表示されます。またトーク名を選択している場合は当シナリオバージョンに含まれないシナリオも表示されます。"},{"category":"作成・編集","question":"「現在編集のシナリオは本番とバージョンのシナリオです。このシナリオを編集すると本番にも反映されます。」とはどういう意味ですか。","answer":"編集しようとしているシナリオは本番環境で有効化されているシナリオで、当バージョンのシナリオを編集するとその内容が直ちに本番環境に反映されるという意味です。"},{"category":"作成・編集","question":"損傷報告とゴミ分別のシナリオはどうやったら使えますか。","answer":"「トークを利用する」をクリックし、開いた画面で使用したいシナリオ欄の「＋作成」をクリックしてください。トーク名に戻った画面の「トーク名」にそのシナリオ名が表示されますので、選択すると編集できるようになります。"},{"category":"作成・編集","question":"ごみのシナリオ内容は変更できますか。","answer":"はい。 「ゴミ分別」のトークを選択時に「CSVインポート」、「CSVエクスポート」ボタンが表示されますので、ゴミ箱シナリオをCSVとしてエクスポートし、編集してから、再度インポートすることで変更することができます。"},{"category":"作成・編集","question":"損傷報告の変更はできますか。","answer":"はい。ただし、メッセージのサムネイル画像やタイトルテキストなど、変更できる各アイテムのプロパティは制限されています。\n\nボタンのアクションのほとんどは、管理画面から変更できません。"},{"category":"作成・編集","question":"画像・動画・PDF・URL等を出すことはできますか。","answer":"可能です。あらかじめ各資材の格納されているURLをメッセージ内に指定してください。"},{"category":"作成・編集","question":"インポートの際のバージョン名はどのように設定したらいいですか。（使用できない文字などはありますか)","answer":"バージョンには任意の文字列を使用できますが、管理を容易にするために、日付（20200413など）またはバージョン番号（1.0.2）を使用することをお勧めします。 \n\nまた、既に存在するバージョン名は入力できません。"},{"category":"作成・編集","question":"シナリオは何階層まで作れますか。","answer":"何階層でも作成可能です。"},{"category":"","question":"ログ画面とはどんな画面ですか。","answer":"連携しているLINE公式アカウントの友だち数、属性、帳票のアクセス情報などをグラフ化して確認できる画面です。"},{"category":"","question":"友だち登録した一覧はどこからみえるのか？帳票登録の内容はその一覧で見れるのか？","answer":"友だち登録の統計情報はメニューの「ログ」から確認可能です。\n帳票登録の内容はメニューの「HOME」から確認できます。"},{"category":"一般設定","question":"ロゴ画像はどんな形式の画像が使用できますか。","answer":"pngまたはjpgをご使用ください。"},{"category":"一般設定","question":"ロゴ画像に指定のサイズはありますか？","answer":"指定サイズはありません。"},{"category":"一般設定","question":"ロゴ画像は縦横どんなサイズでもいいですか？","answer":"プレビューでおさまるサイズにしてください。"},{"category":"一般設定","question":"ロゴ画像にアスペクト比はありますか？","answer":"プレビューでおさまるアスペクト比にしてください。"},{"category":"一般設定","question":"テナント名とは何ですか。","answer":"ロゴ横に表示するテキストとして使用してください。"},{"category":"LINE設定","question":"LINE設定とは何ですか。","answer":"LINEのチャットボットのシナリオやLIFFとLINE Developersをつなぐための設定です。"},{"category":"LINE設定","question":"LINE設定画面では何ができますか。","answer":"LINE設定を行ったり、他にもメール受信の設定、配信設定の確認などを行うことが可能です。誤って編集するとLINE上にトークが表示されなくなりますので、ご注意ください。"},{"category":"LINE設定","question":"具体的にどのように設定すればいいですか。","answer":"導入時、事業者の担当にお尋ねください。\n設定の内容は、line-smart-cityリポジトリの「開発者向け情報」をご確認ください。"},{"category":"LINE設定","question":"損傷報告のメールアドレスを追加登録したいのですが、どうすればいいですか。","answer":"「損傷報告先メールアドレス」と書かれたブロックにある「EMAIL_CHATBOT_DAMAGE_REPORT1～４」のうち、空いている項目にメールアドレスを入力し、保存してください。"},{"category":"LINE設定","question":"損傷報告のメールアドレスを変更・削除したいのですが、どうすればいいですか。","answer":"「損傷報告先メールアドレス」と書かれたブロックにある「EMAIL_CHATBOT_DAMAGE_REPORT1～４」のうち、対象のメールアドレスを変更、または削除し、保存してください。"},{"category":"LINE設定","question":"配信用のメールを変更したいのですが、どうすればいいですか。","answer":"配信用メール自体は本システムの管理対象ではございません。"},{"category":"メール設定","question":"メール設定では何のメールが設定できるのですか。","answer":"システムに登録したときの初期パスワード通知メールと、パスワード紛失時の案内メールです。"},{"category":"メール設定","question":"具体的にメール設定はどのように変更すればいいですか。","answer":"メールの件名およびメッセージについて、テキストフィールド内に表示されている初期メッセージと脚注説明を参考にご入力ください。"},{"category":"ユーザ","question":"ユーザ設定の画面では何ができますか。","answer":"主に登録されている管理ユーザの一覧、追加、削除、編集が行えます。"},{"category":"グループ","question":"グループとは何ですか。","answer":"ユーザの権限グループの一覧を確認できます。"},{"category":"グループ","question":"グループ名は重複して登録できますか。","answer":"グループ名は変更できません。"},{"category":"グループ","question":"グループを新しく作成することはできますか。","answer":"グループは固定となります。"},{"category":"グループ","question":"グループの変更はどうやったら行えますか。","answer":"グループは固定となります。"},{"category":"グループ","question":"adminsとmembersの違いは何ですか。","answer":"membersはadminsから「システム設定」「ユーザ設定」のメニューの操作を外した権限です。"},{"category":"登録ユーザ一覧","question":"ステータスにはどんな種類がありますか。","answer":"パスワード更新必要、リセット必要、承認済みの3種類です。\n「パスワード更新必要」は最初にログインした際にパスワード更新が必要という意味です。\n「リセット必要」は利用時にパスワード紛失等でパスワードを再設定が必要という意味です。\n「承認済み」、は現在のパスワードが利用可能という意味です。"},{"category":"登録ユーザ一覧","question":"各ステータスの状態を教えてください。","answer":"「パスワード更新必要」は最初にログインした際にパスワード更新が必要という意味です。\n「リセット必要」は利用時にパスワード紛失等でパスワードを再設定が必要という意味です。\n「承認済み」、は現在のパスワードが利用可能という意味です。"},{"category":"登録ユーザ一覧","question":"有効の欄にある記号について教えてください。","answer":"チェックマークは有効(サインイン可能)、バツのマークは無効(サインイン不可)です。"},{"category":"登録ユーザ一覧","question":"更新日は何の更新日時ですか。","answer":"ステータス、パスワードなど、その人の情報が更新された日時です。最終ログイン日時ではありません。"},{"category":"ユーザ編集","question":"IDの無効化はどうすればできますか。","answer":"無効化したいユーザをクリックし、開いた画面にある「アカウント無効化」のボタンをクリックしてください。サインインしている本人を無効化することはできません。"},{"category":"ユーザ編集","question":"IDの無効化を解除できますか。(アカウントを有効化するにはどうすればいいですか）","answer":"有効化したいユーザをクリックし、開いた画面にある「アカウント有効化」のボタンをクリックしてください。"},{"category":"ユーザ編集","question":"どうやったらユーザを削除できますか。","answer":"削除したいユーザをクリックし、開いた画面にある「ユーザ削除」のボタンをクリックしてください。"},{"category":"ユーザ編集","question":"ユーザ削除できません。","answer":"無効化されていないユーザは削除できません。"},{"category":"ユーザ編集","question":"削除したユーザを復活させることはできますか。","answer":"一度削除されたユーザを復活させることはできませんので、再度登録しなおしてください。"},{"category":"ユーザ編集","question":"ユーザの登録人数に制限はありますか（ユーザは何人まで登録できますか。）","answer":"上限は特に設けておりません。"},{"category":"ユーザ編集","question":"ユーザの登録方法を教えてください（アカウントの作り方を教えて下さい）","answer":"ユーザ設定画面で「新規登録」ボタンをクリックし、画面の指示に従って必要な情報を入力してください。その後「保存」をクリックすると、登録したユーザに招待メールが送信されます。"},{"category":"ユーザ編集","question":"ユーザ登録で「この新規ユーザに招待を送信しますか？」に対して「いいえ」を選んだ場合はどうなりますか。","answer":"招待メールが送信されません。メール以外の手段で一時パスワードなどをお伝えください。"},{"category":"導入の進め方","question":"月額費用発生はいつから発生しますか。","answer":"事業者により料金体系は異なります。詳しくは事業者の担当にお問い合わせください。"},{"category":"機能","question":"LINEペイなどLINE上で決済機能はつかえますか。","answer":"現時点では、カスタマイズ開発が必要となります。"},{"category":"機能","question":"各種申請はできますか。","answer":"作成した帳票を申請業務に使用することが可能です。"},{"category":"機能","question":"LINE上での住民票発行はできますか。","answer":"現時点での機能では対応しておりません。"},{"category":"機能","question":"新たなソース（機能）ができたときは都度追加費用がかかりますか。","answer":"GovTechプログラムとして提供される機能につきましては利用許諾の範囲で無償利用可能です。"},{"category":"機能","question":"スタンプは作れますか。","answer":"スタンプ作成機能はございません。"},{"category":"導入の進め方","question":"LIFFの作成・設定を代わりにやってもらうことはできますか。","answer":"事業者により保守・対応要件が異なりますので、 詳しくは事業者の担当へお問い合わせください。"},{"category":"作成・編集","question":"構成は作ったのですが、LBDファイルを作ってもらうことはできますか。","answer":"事業者により保守・対応要件が異なりますので、 詳しくは事業者の担当へお問い合わせください。"},{"category":"導入の進め方","question":"保守対応はどこまで可能でしょうか？","answer":"事業者により保守・対応要件が異なりますので、 詳しくは事業者の担当へお問い合わせください。"},{"category":"LINE","question":"LINE Developersのどこに帳票のURLを設定すればいいですか。","answer":"LINEログインチャネルのLIFFメニューになります。"},{"category":"LINE Bot Designer","question":"LINE Bot Designerとは何ですか。","answer":"LINEのチャットボットのシナリオを簡単に作成することが可能なツールです。\n<a href=\"https://developers.line.biz/ja/services/bot-designer/\">LINE Developersサイト</a>からダウンロードできます。"},{"category":"LINE Bot Designer","question":"LINE Bot Designerはどこで入手できますか。","answer":"<a href=\"https://developers.line.biz/ja/services/bot-designer/\">LINE Developersサイト</a>からダウンロードできます。"},{"category":"LINE Bot Designer","question":"LINE Bot Designerはどのように使用すればいいですか。","answer":"LINE Bot Designerのヘルプをご確認ください。"},{"category":"導入の進め方","question":"LINE SMART CITY GovTechプログラムを導入したいときはLINE Fukuoka株式会社への発注、取り引きとなりますか。","answer":"LINE Fukuoka株式会社が自治体へ直接提供することはありませんので、取引先となる開発事業者を見繕う必要がございます。既存取り引きがある地場の開発事業者などにご検討いただくことも可能ですが、どうしても見つからない場合にはLINE Fukuoka株式会社にお問い合わせください。導入サポート可能な事業者様をご紹介いたします。"},{"category":"導入の進め方","question":"LINE SMART CITY GovTechプログラムを活用するときは、LINE Fukuoka株式会社およびLINE株式会社に対価を支払う必要がありますか。","answer":"LINE SMART CITY GovTechプログラムのプログラムソースを活用するうえで、LINE Fukuoka株式会社およびLINE株式会社への対価の支払いは必要ありません。ただし、当該プログラムソースを活用し実際に導入サポートされる開発事業者に関しては、初期構築費および保守費が発生する可能性がございます。"},{"category":"導入の進め方","question":"管理画面を使用する時の、動作保証環境を教えて頂けまでしょうか","answer":"最新版のChromeのみとなります。"}];