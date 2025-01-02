import { getStatsForm } from '@/actions/formAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IoEyeOutline, IoPulseOutline, IoStatsChartOutline, IoTodayOutline } from 'react-icons/io5';

export const CardContainer = async () => {
  const stats = await getStatsForm();
  console.log({ stats });
  return (
    <div className="card-container">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Total Visits</CardTitle>
          <IoEyeOutline size={22} />
        </CardHeader>
        <CardContent>
          <div className="text-4xl">{stats.visits}</div>
          <p className="text-sm">All time form visits</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Total submissions</CardTitle>
          <IoTodayOutline size={22} />
        </CardHeader>
        <CardContent>
          <div className="text-4xl">{stats.submissions}</div>
          <p className="text-sm">All time form submissions</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Submission rate</CardTitle>
          <IoPulseOutline size={22} />
        </CardHeader>
        <CardContent>
          <div className="text-4xl">{stats.submissionRate}%</div>
          <p className="text-sm">Visits that result in form submission</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bounce rate</CardTitle>
          <IoStatsChartOutline size={22} />
        </CardHeader>
        <CardContent>
          <div className="text-4xl">{stats.bounceRate}%</div>
          <p className="text-sm">Visists that leave without interactive</p>
        </CardContent>
      </Card>
    </div>
  );
};
