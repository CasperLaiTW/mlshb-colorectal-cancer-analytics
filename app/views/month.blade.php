@section('main')
    <div ng-controller="monthCtrl" ng-init="init();">
        <div class="jumbotron">
            <h1></h1>
            <div class="form-group">
                <label for="source1">
                    <input type="file" id="source1" accept=".txt,.csv">
                    口腔癌-月報表
                </label>
            </div>
            <div class="form-group">
                <label for="source2">
                    <input type="file" id="source2" accept=".txt,.csv">
                    大腸癌-月報表
                </label>
            </div>
            <button type="button" class="btn btn-primary" ng-click="analytics();">開始分析</button>
        </div>
        <div class="result">
            <tabset>
                <tab heading="月報表">
                    <table class="table table-bordered small">
                        <thead>
                            <tr>
                                <th>類別</th>
                                <th colspan="15">設站篩檢</th>
                                <th colspan="12">宣導講座</th>
                                <th colspan="17">辦理檳榔防制地方宣導工作</th>
                                <th rowspan="3">訪查檳榔攤</th>
                                <th rowspan="3">診所輔導/訪視</th>
                            </tr>
                            <tr>
                                <th rowspan="2">季別</th>
                                <th colspan="8">口腔黏膜篩檢</th>
                                <th colspan="7">糞便潛血檢查</th>
                                <th colspan="4">校園宣導</th>
                                <th colspan="4">口腔癌防制</th>
                                <th colspan="4">大腸癌防制</th>
                                <th colspan="5">平面報導(則)</th>
                                <th colspan="4">電視、廣告（檔次）</th>
                                <th colspan="5">戶外廣告</th>
                                <th>跑馬燈</th>
                                <th>紅布條</th>
                                <th>其他</th>
                            </tr>
                            <tr>
                                <th>設站場次</th>
                                <th>篩檢總人數</th>
                                <th>篩檢人數-男性</th>
                                <th>篩檢人數-女性</th>
                                <th>18~29歲高危險群篩檢-男性</th>
                                <th>18~29歲高危險群篩檢-女性</th>
                                <th>原住民篩檢-男性</th>
                                <th>原住民篩檢-女性</th>
                                <th>設站場次</th>
                                <th>篩檢總人數</th>
                                <th>篩檢人數-男性</th>
                                <th>篩檢人數-女性</th>
                                <th>職場設站</th>
                                <th>口腔粘膜檢查人數</th>
                                <th>糞便潛血檢查人數</th>
                                <th>宣導場次</th>
                                <th>總人數</th>
                                <th>男性數</th>
                                <th>女性數</th>
                                <th>宣導場次</th>
                                <th>總人數</th>
                                <th>男性數</th>
                                <th>女性數</th>
                                <th>宣導場次</th>
                                <th>總人數</th>
                                <th>男性數</th>
                                <th>女性數</th>
                                <th>新聞稿</th>
                                <th>社區專欄</th>
                                <th>苗栗季刊</th>
                                <th>雜誌</th>
                                <th>其他</th>
                                <th>廣告</th>
                                <th>新聞報導</th>
                                <th>節目專訪</th>
                                <th>其他</th>
                                <th>車體</th>
                                <th>看板</th>
                                <th>牆面彩繪</th>
                                <th>大型布幔</th>
                                <th>其他</th>
                                <th>跑馬燈</th>
                                <th>紅布條</th>
                                <th>其他</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="(key, value) in annualReport.oral">
                                <td><% key+1 %> 月</td>
                                <td><% value.filter.count %></td>
                                <td><% value.filter.man + value.filter.female %></td>
                                <td><% value.filter.man %></td>
                                <td><% value.filter.female %></td>
                                <td><% value.filter.teenager.man %></td>
                                <td><% value.filter.teenager.female %></td>
                                <td><% value.filter.abor.man %></td>
                                <td><% value.filter.abor.female %></td>
                                <td><% annualReport.colorectal[key].filter.count %></td>
                                <td><% annualReport.colorectal[key].filter.man + annualReport.colorectal[key].filter.female %></td>
                                <td><% annualReport.colorectal[key].filter.man %></td>
                                <td><% annualReport.colorectal[key].filter.female %></td>
                                <td><% annualReport.colorectal[key].filter.workplace.count %></td>
                                <td><% annualReport.colorectal[key].filter.workplace.oral %></td>
                                <td><% annualReport.colorectal[key].filter.workplace.blood %></td>
                                <td><% value.lectures.school.count %></td>
                                <td><% value.lectures.school.man + value.lectures.school.female %></td>
                                <td><% value.lectures.school.man %></td>
                                <td><% value.lectures.school.female %></td>
                                <td><% value.lectures.count %></td>
                                <td><% value.lectures.man + value.lectures.female %></td>
                                <td><% value.lectures.man %></td>
                                <td><% value.lectures.female %></td>
                                <td><% annualReport.colorectal[key].lectures.count %></td>
                                <td><% annualReport.colorectal[key].lectures.man + annualReport.colorectal[key].lectures.female %></td>
                                <td><% annualReport.colorectal[key].lectures.man %></td>
                                <td><% annualReport.colorectal[key].lectures.female %></td>
                                <td><% value.media.newspaper %></td>
                                <td><% value.media.column %></td>
                                <td><% value.media.publication %></td>
                                <td><% value.media.magazine %></td>
                                <td><% value.media.other %></td>
                                <td><% value.tv.adv %></td>
                                <td><% value.tv.report %></td>
                                <td><% value.tv.interview %></td>
                                <td><% value.tv.other %></td>
                                <td><% value.ads.car %></td>
                                <td><% value.ads.board %></td>
                                <td><% value.ads.wall %></td>
                                <td><% value.ads.buman %></td>
                                <td><% value.ads.other %></td>
                                <td><% value.marquee %></td>
                                <td><% value.cloth %></td>
                                <td><% value.other %></td>
                                <td><% value.area %></td>
                                <td><% annualReport.coach[key].count %></td>
                            </tr>
                        </tbody>
                    </table>
                </tab>
                <tab heading="宣導場次">
                    <table class="table table-bordered small">
                        <thead>
                            <tr>
                                <td rowspan="2">鄉鎮別</td>
                                <td rowspan="2">檳榔攤宣導</td>
                                <td colspan="3">口腔癌防治</td>
                                <td rowspan="2">大腸癌防治</td>
                            </tr>
                            <tr>
                                <td>校園</td>
                                <td>職場(高嚼檳)</td>
                                <td>一般民眾</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="(key, value) in annualReport.goal">
                                <td><% value.name %></td>
                                <td><% value.data.store %></td>
                                <td><% value.data.school %></td>
                                <td><% value.data.workplace %></td>
                                <td><% value.data.normal %></td>
                                <td><% value.data.prevent %></td>
                            </tr>
                        </tbody>
                    </table>
                </tab>
            </tabset>
        </div>
    </div>
@stop

@section('scripts')
    {{ HTML::script('/scripts/app.js') }}
    {{ HTML::script('/scripts/month.js') }}
@stop